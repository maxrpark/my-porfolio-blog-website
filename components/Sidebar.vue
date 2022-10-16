<template>
  <div class="sidebar">
    <AppSearchInput />
    <div class="tags">
      <h5 class="">Blog Categories</h5>
      <SidebarTags :tags="tags" />
    </div>
    <div class="projects-links">
      <div v-if="projects.length > 1">
        <div class="lastest-projects">
          <h5 class="">Lastest projects</h5>
          <div v-for="project in projects" :key="project.id">
            <Nuxt-link class="" :to="`/projects/${project.id}`"
              ><p>{{ project.name }}</p></Nuxt-link
            >
          </div>
        </div>
        <h5 class="">Projects Categories</h5>
        <div class="tagsList" v-for="newTag in tagsSorted" :key="newTag">
          <div class="">
            <Nuxt-link class="" :to="`/projects/tags/${newTag.toLowerCase()}`"
              ><p>{{ newTag }}</p></Nuxt-link
            >
          </div>
        </div>
        <h5 class="">Twitter</h5>
        <TwitterFeeds />
      </div>
      <div v-else>
        <Loader />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../utils/axios";
export default {
  props: ["tags"],
  data() {
    return {
      projects: [],
      tagsList: new Set(),
      tagsSorted: []
    };
  },
  mounted() {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/api/myProjects");
        this.projects = data.slice(0, 5);
        data.forEach(project => {
          project.tags.forEach(tag => {
            this.tagsList.add(tag.toUpperCase());
          });
          this.tagsSorted = [...this.tagsList].sort();
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
}
h5 {
  margin-top: 1.5rem;
  text-transform: uppercase;
  border-left: 3px solid var(--primary-color-one);
  padding-left: 1.5rem;
}
.tags {
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  margin: 0.2rem 1rem;
  padding: 0 0.5rem;
  text-transform: capitalize;
  border-left: 2px solid transparent;
  color: var(--text-color-two);
}
p:hover {
  border-left: 2px solid var(--primary-color-two);
}
@media screen and (min-width: 1024px) {
  .sidebar {
    margin-top: 7rem;
  }
}
</style>
