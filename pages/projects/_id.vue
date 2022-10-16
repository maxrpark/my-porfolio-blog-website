<template>
  <div class="single-project-page">
    <SocialHead
      :title="projectDesc.title"
      :description="projectDesc.description"
      :image="projectDesc.img"
    />
    <div v-if="!loading" class="section-center">
      <article class="article-section">
        <div class="article-title">
          <h1>{{ project.name }}</h1>
          <div class="article-tags">
            <div class="tag" v-for="tag in project.tags" :key="tag">
              <Nuxt-link class="" :to="`/projects/tags/${tag}`">{{
                tag
              }}</Nuxt-link>
            </div>
          </div>
        </div>
        <img class="project-img" :src="img" alt="" />
        <p class="version">{{ project.version }}</p>
        <div class="links">
          <a :href="project.pageUrl" target="_blank" class="btn">Visit</a>
          <div v-if="project.gitUrl">
            <a :href="project.gitUrl" target="_blank" class="btn">
              Source code</a
            >
          </div>
        </div>
        <div class="article-description">
          <h2 class="">{{ project.name }}</h2>
        </div>
        <div class="project-detail">
          <h3>Description</h3>
          <p>{{ project.shortDsc }}</p>
        </div>
        <nav class="pb-6 table-contents">
          <h5>Table of contents</h5>
          <!-- <p class="font-semibold hover:underline ">Description</p> -->
          <ul>
            <li
              v-for="link of projectDesc.toc"
              :key="link.id"
              :class="{
                'font-semibold': link.depth === 2
              }"
            >
              <nuxtLink
                :to="`#${link.id}`"
                class="hover:underline content-links"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3
                }"
                >{{ link.text }}</nuxtLink
              >
            </li>
          </ul>
        </nav>
        <div>
          <nuxt-content :document="projectDesc" />
        </div>
      </article>

      <Sidebar style="margin-top: 0" :tags="tags" />
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import api from "../../utils/axios";
export default {
  head() {
    return {
      title: `${this.project.name} || Maxi Ruti`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.projectDesc.description
        }
      ]
    };
  },
  data() {
    return {
      project: [],
      text: null,
      img: "",
      loading: true
    };
  },
  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    const projectDesc = await $content("projects", params.id)
      .only(["title", "description", "body", "toc", "img"])
      .fetch();

    return {
      tags,
      projectDesc
    };
  },
  mounted() {
    const getProject = async () => {
      try {
        const id = this.$route.params.id;
        const {
          data: { fields }
        } = await api.get(`/api/project?id=${id}`);
        this.project = fields;
        const { img } = fields;
        const url = img[0].url;
        this.img = url;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    };
    getProject();
  }
};
</script>

<style scoped>
.article-section {
  background-color: var(--white-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
}
.single-project-page {
  min-height: 100vh;
}
.version {
  text-align: center;
}
.project-detail h3,
.table-contents h5 {
  margin-bottom: 0.5rem;
}
.project-detail h3 {
  text-align: center;
}
.table-contents li {
  margin-bottom: 0.2rem;
}
.single-project-page {
  color: var(--text-color-two);
}
.single-project-page p {
  line-height: 2rem;
}
.project-detail {
  margin-bottom: 1rem;
}
.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 1rem;
}
.links a {
  width: 8rem;
  text-align: center;
}
@media screen and (min-width: 1240px) {
  .article-section {
    padding: 1rem 2rem;
    box-sizing: content-box;
  }
}
</style>
