<template>
  <div>
    <!-- <div v-if="projects.length > 1">
      <div v-if="projectsPage">
        <div class="project-container">
          <SingleProject
            v-for="project in projects.slice(0, 6)"
            :project="project"
            :key="project.id"
          />
        </div>

      </div>
      <div v-else>
        <div class="project-container">
          <SingleProject
            v-for="project in projects"
            :project="project"
            :key="project.id"
          />
        </div>
      </div>
    </div> -->
    <!-- <div v-else>
      <Loader />
    </div> -->
  </div>
</template>

<script>
import api from "../utils/axios";
export default {
  props: {
    projects: {
      type: Array,
    },
  },
  // data() {
  //   return {
  //     // projects: [],
  //   };
  // },
  computed: {
    projectsPage() {
      return this.$route.path === "/";
    },
  },
  // mounted() {
  //   const fetchProjects = async () => {
  //     try {
  //       const { data } = await api.get("/api/myProjects");
  //       this.projects = data
  //         .sort((a, b) => b.projectID - a.projectID)
  //         .filter((p) => p.featured == "true");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchProjects();
  // },
};
</script>

<style></style>
