<template>
  <div>
    <div v-if="projects.length > 1">
      <div v-if="projectsPage">
        <div class="project-container">
          <SingleProject
            v-for="project in projects.slice(0, 6)"
            :project="project"
            :key="project.id"
          />
        </div>

        <!-- </div> -->
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
    </div>
    <!-- <div v-else>
      <Loader />
    </div> -->
  </div>
</template>

<script setup>
import { defineComponent, ref, useFetch } from "@nuxtjs/composition-api";
import axios from "axios";

import { useStore } from "../store/store";
const store = useStore();

const projects = store.projects;

console.log(projects);

// const { fetch, fetchState } = useFetch(async () => {
//   const { data } = await api.get("/api/myProjects");
//   projects.value = data;
// });
</script>

<script>
import api from "../utils/axios";
export default {
  data() {
    return {
      // projects: [],
    };
  },
  computed: {
    projectsPage() {
      return this.$route.path === "/";
    },
  },
  mounted() {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/api/myProjects");
        this.projects = data
          .sort((a, b) => b.projectID - a.projectID)
          .filter((p) => p.featured == "true");
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  },
};
</script>

<style>
.project-container {
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
