<template>
  <div>
    <div class="twitter-feed">
      <a
        class="twitter-timeline"
        href="https://twitter.com/MaxCodeJourney?ref_src=twsrc%5Etfw"
        >Tweets by MaxCodeJourney</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.twitter-feed {
  margin-top: 1rem;
  overflow-y: scroll;
  height: 500px;
}
</style>
