<template>
  <div class="section-title">
    <h2>My latest {{ section }}</h2>
    <Nuxt-link :to="url">
      <span class="home-page-links">See all {{ section }}</span>
    </Nuxt-link>
  </div>
</template>

<script setup>
import { defineProps } from "@nuxtjs/composition-api";
const props = defineProps({
  section: {
    type: Object,
  },
  url: {
    type: Object,
  },
});
</script>

<style scoped>
.section-title {
  padding: 1rem;
}
.home-page-links {
  font-size: 1.25rem;
  border-bottom: 2px solid var(--primary-color-one);
  padding-bottom: 0.2rem;
  transition: all 0.1s linear;
}
.home-page-links:hover {
  border-bottom: 2px solid var(--primary-color-fourth);
  color: var(--primary-color-fourth);
  transform: translateY(-3px);
}
</style>
