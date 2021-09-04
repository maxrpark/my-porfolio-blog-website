<template>
  <div class="hero">
    <h1>{{ title }}</h1>
    <h5>{{ desc }}</h5>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: ["title", "desc"]
};
</script>
<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/stars.jpeg");
  min-height: 30vh;
  flex-direction: column;
  padding: 1rem;
  animation: stars 15s linear infinite;
  margin-bottom: 2rem;
  color: var(--white-color);
}
h1,
h5 {
  text-align: center;
  color: var(--white-color);
}
@keyframes stars {
  from {
    background-position: bottom right;
  }
  to {
    background-position: top left;
  }
}
</style>
