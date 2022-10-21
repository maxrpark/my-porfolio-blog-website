<template>
  <div>
    <Hero title="Maxi Ruti" desc="Welcome to my Portfolio-Blog">
      <SocialIcons />
    </Hero>
    <main>
      <div class="projects">
        <SectionTitle section="projects" url="/projects" />
        <ul class="project-container">
          <SingleProject
            v-for="project in projects.slice(0, 6)"
            :project="project"
            :key="project.id"
          />
        </ul>
      </div>

      <div class="blog-section">
        <SectionTitle section="post" url="/blog" />
        <ul class="cards">
          <PostCard
            v-for="post of posts.slice(0, 4)"
            :key="post.id"
            :post="post"
          />
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useAsync, useContext } from "@nuxtjs/composition-api";
const { $http } = useContext();
const projects = useAsync(() =>
  $http.$get(`http://localhost:8888/api/myProjects`)
);

const posts = useAsync(() =>
  $http.$get(`https://dev.to/api/articles?username=maxrpark`)
);
</script>

<style scoped>
.main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
