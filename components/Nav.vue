<template>
  <nav>
    <div class="navbar">
      <Nuxt-link to="/">Home</Nuxt-link>
      <Nuxt-link to="/projects">Projects</Nuxt-link>
      <Nuxt-link to="/blog">Blog</Nuxt-link>
      <Nuxt-link to="/About">About</Nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: var(--primary-color-two);
  color: var(--white-color);
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 17px;
}
</style>
