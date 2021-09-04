<template>
  <footer>
    <h3>Maxi Ruti</h3>
    <SocialIcons />
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  height: 150px;
  background: black;
  color: white;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
footer h3 {
  color: var(--white-color);
}
</style>
