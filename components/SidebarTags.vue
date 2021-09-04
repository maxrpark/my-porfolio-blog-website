<template>
  <div class="">
    <ul class="">
      <li v-for="tag of tags" :key="tag.slug" class="">
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
          <p class="">
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["tags"]
};
</script>

<style scoped>
p {
  font-size: 1.125rem;
  margin: 0.2rem 1rem;
  padding: 0 0.5rem;
  text-transform: capitalize;
  border-left: 2px solid transparent;
  color: var(--text-color-two);
}
p:hover {
  border-left: 2px solid var(--primary-color-two);
}
</style>
