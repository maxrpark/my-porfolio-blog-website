<template>
  <li class="card">
    <a :href="post.url" target="_blank">
      <div class="card-img">
        <img :src="post.cover_image" />
      </div>

      <div>
        <h2>{{ post.title }}</h2>

        <div class="desc">
          <p>{{ post.description }}</p>
        </div>
      </div>
    </a>
  </li>
</template>

<script setup>
import { defineProps } from "@nuxtjs/composition-api";
const props = defineProps({
  post: {
    type: Object,
  },
});
</script>

<style scoped>
.card {
  display: grid;
  border-radius: 5px;
  color: var(--primary-color-fourth);
  border: 1px solid var(--grey-color-one);
  height: 100%;
  margin: 0.5rem;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  padding: 1rem;
  transition: all 0.3s linear;
}
.card h2 {
  text-align: center;
  color: var(--primary-color-one);
  font-size: 1.3rem;
  margin-bottom: 0;
}
.card p {
  color: var(--primary-color-one);
}
.desc {
  padding: 0 1rem;
}
.card img {
  width: 100%;
  height: 200px;
  transition: all 0.3s linear;
  object-fit: cover;
}
.card-img {
  overflow: hidden;
  border-radius: 5px;
  object-fit: cover;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: var(--box-shadow-hover);
}
.card:hover img {
  transform: scale(1.2);
}
</style>
