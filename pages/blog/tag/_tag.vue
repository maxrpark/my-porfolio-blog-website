<template>
  <div class="">
    <Hero :title="tag.name.toUpperCase()" :desc="tag.description" />
    <div class="main-section">
      <div class="blog-section">
        <div class="page-description">
          <NuxtLink to="/blog">
            <p class="btn">Back to All Articles</p>
          </NuxtLink>
          <h3 class="">Articles tagged {{ tag.name }}</h3>
        </div>
        <div class="post-cards">
          <div class="cards">
            <div v-for="article in articles" :key="article.slug">
              <div class="card">
                <NuxtLink
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  class=""
                >
                  <div class="card-img">
                    <img :src="article.img" />
                  </div>

                  <div class="">
                    <h2 class="">{{ article.title }}</h2>
                    <p>{{ article.description }}</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar :tags="tagsList" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$route.params.tag.toUpperCase()} posts || Maxi Ruti`
    };
  },
  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch();
    const tag = tags.length > 0 ? tags[0] : {};
    const articles = await $content("articles")
      .where({ tags: { $contains: tag.name } })
      .sortBy("createdAt", "desc")
      .fetch();
    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tag,
      tagsList
    };
  }
};
</script>
<style scoped>
.page-description .btn {
  margin-left: 1rem;
}
</style>
