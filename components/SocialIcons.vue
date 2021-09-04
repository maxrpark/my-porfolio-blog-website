<template>
  <div class="social-icons">
    <a
      href="https://www.instagram.com/maxi.r.park/"
      target="_blank"
      class="icons"
    >
      <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
    </a>
    <a
      href="https://twitter.com/MaxCodeJourney?s=08"
      target="_blank"
      class="icons"
    >
      <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
    </a>
    <a href="https://github.com/maxrpark" target="_blank" class="icons">
      <font-awesome-icon class="icon" :icon="['fab', 'github']" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.social-icons {
  text-align: center;
  display: flex;
}
.icons {
  width: 45px;
  height: 45px;
  background: #f1f1f1;
  margin: 10px;
  border-radius: 30%;
  color: var(--primary-color-fourth);
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icons .icon {
  font-size: 25px;
  transition: 0.2s;
}
.icons:hover .icon {
  transform: scale(1.3);
  color: #f1f1f1;
}
.icons::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: var(--primary-color-fourth);
  left: -110%;
  top: 90%;
  transform: rotate(45deg);
}
.icons:hover::before {
  animation: animation 0.7s 1 forwards;
}
@keyframes animation {
  0% {
    left: -110%;
    top: 90%;
  }
  50% {
    left: 15%;
    top: -30%;
  }
  100% {
    top: -10%;
    left: -10%;
  }
}
</style>
