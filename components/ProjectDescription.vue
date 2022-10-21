<template>
  <section>
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

    <img
      class="project-img"
      :src="project.img[0].thumbnails.large.url"
      alt=""
    />
    <p class="version">{{ project.version }}</p>
    <div class="links">
      <a :href="project.pageUrl" target="_blank" class="btn">Visit</a>
      <div v-if="project.gitUrl">
        <a :href="project.gitUrl" target="_blank" class="btn"> Source code</a>
      </div>
    </div>
    <div class="article-description">
      <h2 class="">{{ project.name }}</h2>
    </div>
    <div class="project-detail">
      <h3>Description</h3>
      <p>{{ project.shortDsc }}</p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "@nuxtjs/composition-api";
const props = defineProps({
  project: {
    type: Object,
  },
});
</script>

<style scoped>
.version {
  text-align: center;
}
.project-detail {
  margin-bottom: 1rem;
}
.project-detail h3 {
  text-align: center;
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
.project-detail h3 {
  margin-bottom: 0.5rem;
}
</style>
