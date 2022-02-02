<template>
  <div>
    <Hero title="Maxi Ruti" desc="Welcome to my Portfolio-Blog">
      <SocialIcons />
    </Hero>
    <div class="projects">
      <div class="section-title">
        <h2>My latest projects</h2>
        <Nuxt-link to="/projects">
          <span class="home-page-links">See all projects</span>
        </Nuxt-link>
      </div>
      <Projects />
    </div>
    <div class="blog-section">
      <div class="section-title">
        <h2>My blog</h2>
        <Nuxt-link to="/blog">
          <span class="home-page-links">See all post</span>
        </Nuxt-link>
      </div>
      <div class="post-cards">
        <ul>
          <div class="cards">
            <li v-for="article of articles" :key="article.slug">
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
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "../components/Projects.vue";
export default {
  head() {
    return {
      title: "Home || Maxi Ruti",
    };
  },
  name: "HomePage",
  components: { Projects },
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .limit(6)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();
    
    return {
      articles
    };
  },
};
</script>
<style scoped>
.projects,
.post-cards {
  max-width: 1200px;
  margin: 0 auto;
}
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
