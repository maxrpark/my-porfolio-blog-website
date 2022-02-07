<template>
  <div class="project-tag-page">
    <Hero :title="tagName.toUpperCase()" desc="Projects" />
    <div v-if="!loading" class="main-section">
      <div class="article-section">
        <div class="page-description">
          <NuxtLink to="/projects"
            ><p class="btn">Back to All Projects</p></NuxtLink
          >
          <h3 class="">Articles tagged {{ tagName }}</h3>
        </div>
        <div class="cards">
          <div
            class="single-project"
            v-for="project in projects"
            :key="project.id"
          >
            <img class="img project-img-card" :src="project.url" alt="" />
            <div class="project-details">
              <div class="project-title">
                <h5>{{ project.version }}</h5>
                <h2>{{ project.name }}</h2>
              </div>
                <div class="project-tags">
                  <div v-for="tag in project.tags.slice(0, 3)"
                  :key="tag[0]">
                    <div class="tag">
                      <Nuxt-link class="" :to="`/projects/tags/${tag}`">{{
                        tag
                      }}</Nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-links">
                <a class="project-btn" target="_blank" :href="project.pageUrl"
                  >visit</a
                >
                <Nuxt-link class="project-btn" :to="`/projects/${project.id}`"
                  >read more</Nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar style="margin-top: 0" :tags="tagsList" />
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: `${this.$route.params.tag.toUpperCase()} projects || Maxi Ruti`
    };
  },
  data() {
    return {
      projects: [],
      tagName: this.$route.params.tag,
      loading: true
    };
  },
  async asyncData({ $content, params }) {
    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      tagsList
    };
  },
  mounted() {
    const tagName = this.$route.params.tag;
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get("/api/myProjects");
        console.log(data);
        data.forEach(projects => {
          let exist = false;
          for (let i = 0; i < projects.tags.length; i++) {
            if (projects.tags[i] === tagName) {
              exist = true;
            }
          }
          if (exist) {
            this.projects.push(projects);
            this.loading = false;
          }
        });
      } catch (error) {
        console.log(error);
        // result.innerHTML = "<h4>There was an error</h4>";
      }
    };

    fetchProjects();
  }
};
</script>

<style scoped>
/* .article-section {
  margin: 0 auto;
  max-width: 850px;
  padding: 1rem;
} */
/* .main-section {
  display: grid;
  grid-template-columns: 1fr 300px;
  margin: 2rem auto;
  max-width: 1200px;
} */
.project-title{
  display: flex;
justify-content: space-around;
flex-direction: column;
}
.project-tag-page {
  min-height: 100vh;
}
</style>
