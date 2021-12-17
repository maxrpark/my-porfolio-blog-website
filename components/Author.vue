<template>
  <div class="about-component">
    <NuxtLink to="../About/" class="about-me-card">
      <img
        class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
        src="https://avatars.githubusercontent.com/u/84664090?v=4"
      />
      <div class="">
        <h4 class="">Author</h4>
        <h5>Maxi Ruti</h5>
        <p>
          I am self taught web developer from Argentina. I am currently living
          in South Korea. Currently working as Junior Front-End Developer at
          NOLGONG.
        </p>
      </div>
    </NuxtLink>
    <div class="follow-me">
      <h4>Follow Me</h4>
      <SocialIcons />
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   author: {
  //     type: Object,
  //     required: true
  //   }
  // }
};
</script>
<style scoped>
.about-component {
  box-shadow: var(--box-shadow);
  padding: 1rem 2rem;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about-me-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
img {
  border-radius: 50%;
  height: 150px;
  width: 150px;
}
.follow-me h4 {
  text-align: center;
}

@media screen and (min-width: 567px) {
  .about-me-card {
    flex-direction: row;
    gap: 3rem;
  }
  .follow-me {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
}
</style>
