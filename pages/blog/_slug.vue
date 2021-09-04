<template>
  <div class="">
    <SocialHead
      :title="article.title"
      :description="article.description"
      :image="article.img"
    />
    <div class="section-center">
      <article class="article-section">
        <div class="article-container">
          <div class="article-title">
            <h1>{{ article.title }}</h1>
            <div class="article-tags">
              <span class="tag" v-for="(tag, id) in article.tags" :key="id">
                <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
                  {{ tags[tag].name }}
                </NuxtLink>
              </span>
            </div>
          </div>
          <img :src="article.img" :alt="article.alt" class="article-img" />
          <div class=""></div>
        </div>
        <div class="article-content">
          <div class="article-description">
            <h2 class="">{{ article.title }}</h2>
            <!-- <p>{{ article.description }}</p> -->
            <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
          </div>
          <!-- table of contents -->
          <nav class="pb-6">
            <h4>Table of contents</h4>
            <ul>
              <li
                v-for="link of article.toc"
                :key="link.id"
                :class="{
                  'font-semibold': link.depth === 2
                }"
              >
                <nuxtLink
                  :to="`#${link.id}`"
                  class="hover:underline"
                  :class="{
                    'py-2': link.depth === 2,
                    'ml-2 pb-2': link.depth === 3
                  }"
                  >{{ link.text }}</nuxtLink
                >
              </li>
            </ul>
          </nav>
          <!-- content from markdown -->
          <nuxt-content :document="article" />
          <!-- content author component -->
          <author :author="article.author" />
          <!-- prevNext component -->
          <PrevNext :prev="prev" :next="next" class="mt-8" />
        </div>
      </article>
      <Sidebar style="margin-top: 0" :tags="tagsSidebar" />
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .where({ name: { $containsAny: article.tags } })
      .fetch();

    const tags = Object.assign({}, ...tagsList.map(s => ({ [s.name]: s })));
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    const tagsSidebar = await $content("tags")
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      article,
      tags,
      prev,
      next,
      tagsSidebar
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
<style scoped>
.article-section {
  background-color: var(--white-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
}
@media screen and (min-width: 1240px) {
  .section-center {
    margin: 2rem auto;
  }
  .article-section {
    padding: 1rem 2rem;
    box-sizing: content-box;
  }
}
</style>
