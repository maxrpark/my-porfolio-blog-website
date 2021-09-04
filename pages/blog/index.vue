<template>
  <div>
    <Hero
      title="Blog"
      desc="About courses and things I like or see about web development"
    />
    <div class="main-section">
      <div class="blog-section">
        <div class="post-cards">
          <div class="cards">
            <div v-for="article of articles" :key="article.slug">
              <!-- single card -->
              <div class="card">
                <NuxtLink
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                >
                  <div class="card-img">
                    <img :src="article.img" />
                  </div>
                  <div>
                    <h2>{{ article.title }}</h2>
                    <div class="desc">
                      <p>{{ article.description }}</p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <!-- end of single card -->
            </div>
          </div>
        </div>
      </div>
      <Sidebar style="margin-top: 2rem" :tags="tags" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Blog || Maxi Ruti"
    };
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "desc")
      .fetch();
    const tags = await $content("tags")
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tags
    };
  }
};
</script>

<style scoped>
.blog-section {
  margin: 2rem auto;
}
.post-cards {
  max-width: 920px;
  margin: 0;
}

.cards {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media screen and (min-width: 1024px) {
  .article-section {
    padding: 0;
  }
  .main-section {
    display: grid;
    grid-template-columns: 1fr 300px;
    margin: 2rem auto;
  }
}
</style>
