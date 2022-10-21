<template>
  <div class="projects-page">
    <div>
      <Hero title="Maxi Ruti" desc="My Projects" />
      <ul class="project-container">
        <SingleProject
          v-for="project in projects"
          :project="project"
          :key="project.id"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useAsync, useContext } from "@nuxtjs/composition-api";
const { $http } = useContext();
const projects = useAsync(() =>
  $http.$get(`http://localhost:8888/api/myProjects`)
);
</script>

<style>
.projects-page {
  min-height: 100vh;
}
</style>
