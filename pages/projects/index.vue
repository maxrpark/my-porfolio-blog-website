<template>
  <div class="projects-page">
    <div>
      <Hero title="Maxi Ruti" desc="My Projects" />
      <Projects />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "My Projects || Maxi Ruti"
    };
  },
  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .only(["name", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      tags
    };
  }
};
</script>

<style>
.projects-page {
  min-height: 100vh;
}
</style>
