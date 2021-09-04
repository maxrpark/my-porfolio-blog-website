<template>
  <div class="search-bar">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white"
    />
    <ul
      v-if="articles.length"
      class="w-auto flex-1 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
    >
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 hover:text-black"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: []
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>
<style scoped>
.search-bar {
  max-width: 700px;
  margin: 1rem;
}
a {
  color: var(--text-color-two);
}
</style>
