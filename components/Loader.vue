<template>
  <div class="loader-container">
    <section class="space">
      <div class="stars">
        <div class="stars-back"></div>
        <div class="stars-middle"></div>
        <div class="stars-front"></div>
      </div>
      <div class="rocket">
        <div class="fuselage">
          <div class="nose"></div>
          <div class="head">
            <span class="window"></span>
          </div>
          <div class="neck"></div>
          <div class="body"></div>
          <div class="reactor"></div>
          <div class="fire">
            <div class="spark1"></div>
            <div class="spark2"></div>
            <div class="spark3"></div>
            <div class="spark4"></div>
            <div class="spark5"></div>
            <div class="spark6"></div>
          </div>
        </div>
        <div class="left-fin"></div>
        <div class="left-fin-end"></div>
        <div class="right-fin"></div>
        <div class="right-fin-end"></div>
      </div>
    </section>
  </div>
</template>

<script scoped>
export default {};
</script>

<style>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}
.space {
  position: relative;
  display: block;
  height: 100vh;
  width: 100%;
  background-color: #1b2735;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  color: white;
  padding-top: 20vh;
}

.stars > div {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.stars .stars-back {
  top: -50%;
  opacity: 0.5;
  background-image: radial-gradient(
      2px 2px at 20px 30px,
      #eee,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 300px 300px;
  -webkit-animation: stars 4s infinite linear;
  animation: stars 4s infinite linear;
}

.stars .stars-middle {
  background-image: radial-gradient(
      3px 3px at 50px 160px,
      #ddd,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  -webkit-animation: stars 2.5s infinite linear;
  animation: stars 2.5s infinite linear;
}

.rocket {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 50px;
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
}

.fuselage {
  width: 50px;
}

.nose {
  width: 25px;
  margin: 0 auto;
  border-top: 15px solid #353535;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

.head {
  position: relative;
  display: block;
  border-bottom: 25px solid white;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 43px;
  margin: 0 auto;
}

.window {
  position: absolute;
  top: 10px;
  border-bottom: 15px solid #00a0d6;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  height: 0;
  width: 25px;
}

.neck {
  position: relative;
  width: 45px;
  height: 30px;
  margin: 0 auto;
  background: #f4f4f4;
}
.neck:after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 22.5px;
  height: 30px;
  background: #e0e0e0;
}

.body {
  position: relative;
  width: 50px;
  height: 120px;
  background: #f4f4f4;
  border-bottom: 3px solid #a81237;
  border-top: 3px solid #a81237;
}
.body:after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 25px;
  height: 100%;
  background: #e0e0e0;
}

.reactor {
  position: relative;
  border-bottom: 30px solid #4f4f4f;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 30px;
  margin: 0 auto;
}
.reactor:after {
  content: "";
  position: absolute;
  top: 0;
  left: -10px;
  width: 15px;
  opacity: 0.3;
  border-bottom: 30px solid #e0e0e0;
  border-left: 10px solid transparent;
}

.fire {
  position: relative;
  width: 25px;
  height: 70px;
  margin: 0 auto;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  -webkit-animation: fire 0.2s infinite;
  animation: fire 0.2s infinite;
}
.fire div {
  position: absolute;
  background: #ed0303;
}

.spark1 {
  top: 30px;
  left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-animation: fireBig 0.5s infinite;
  animation: fireBig 0.5s infinite;
}

.spark2 {
  top: 35px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  -webkit-animation: fireBig 0.3s infinite;
  animation: fireBig 0.3s infinite;
}

.spark3 {
  top: 40px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  -webkit-animation: fireSmall 0.4s infinite;
  animation: fireSmall 0.4s infinite;
}

.spark4 {
  top: 40px;
  left: -20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  -webkit-animation: fireSmall 0.7s infinite;
  animation: fireSmall 0.7s infinite;
}

.spark5 {
  top: 30px;
  right: -10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  -webkit-animation: fireSmall 0.6s infinite;
  animation: fireSmall 0.6s infinite;
}

.spark6 {
  top: 60px;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  -webkit-animation: fireSmall 0.2s infinite;
  animation: fireSmall 0.2s infinite;
}

.left-fin {
  position: absolute;
  top: 73px;
  right: 50px;
  width: 5px;
  border-bottom: 110px solid white;
  border-left: 60px solid transparent;
}
.left-fin-end {
  position: absolute;
  top: 113px;
  right: 70px;
  border-bottom: 70px solid white;
  border-left: 70px solid transparent;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 10%;
}

.right-fin {
  position: absolute;
  top: 73px;
  left: 50px;
  width: 5px;
  border-bottom: 110px solid white;
  border-right: 60px solid transparent;
}
.right-fin-end {
  position: absolute;
  top: 113px;
  left: 70px;
  border-bottom: 70px solid white;
  border-right: 70px solid transparent;
  border-bottom-right-radius: 10%;
}
.right-fin:after {
  content: "";
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  border-bottom: 110px solid #c4c4c4;
  border-right: 10px solid transparent;
}

@-webkit-keyframes fire {
  0% {
    background: linear-gradient(
      to bottom,
      #ff861c 0%,
      #ef017c 50%,
      #ed0303 100%
    );
  }
  50% {
    background: linear-gradient(
      to bottom,
      #ed0303 0%,
      #ff861c 51%,
      #ef017c 100%
    );
  }
  100% {
    background: linear-gradient(
      to bottom,
      #ef017c 0%,
      #ed0303 51%,
      #ff861c 100%
    );
  }
}

@keyframes fire {
  0% {
    background: linear-gradient(
      to bottom,
      #ff861c 0%,
      #ef017c 50%,
      #ed0303 100%
    );
  }
  50% {
    background: linear-gradient(
      to bottom,
      #ed0303 0%,
      #ff861c 51%,
      #ef017c 100%
    );
  }
  100% {
    background: linear-gradient(
      to bottom,
      #ef017c 0%,
      #ed0303 51%,
      #ff861c 100%
    );
  }
}
@-webkit-keyframes fireBig {
  0% {
    width: 10px;
    height: 10px;
    background: #ff861c;
  }
  50% {
    background: #ef017c;
  }
  100% {
    width: 60px;
    height: 60px;
  }
}
@keyframes fireBig {
  0% {
    width: 10px;
    height: 10px;
    background: #ff861c;
  }
  50% {
    background: #ef017c;
  }
  100% {
    width: 60px;
    height: 60px;
  }
}
@-webkit-keyframes fireSmall {
  0% {
    width: 10px;
    height: 10px;
    background: #ff861c;
  }
  50% {
    background: #ef017c;
  }
  100% {
    width: 40px;
    height: 40px;
  }
}
@keyframes fireSmall {
  0% {
    width: 10px;
    height: 10px;
    background: #ff861c;
  }
  50% {
    background: #ef017c;
  }
  100% {
    width: 40px;
    height: 40px;
  }
}
@-webkit-keyframes stars {
  0% {
    top: -100%;
  }
  100% {
    top: 0;
  }
}
@keyframes stars {
  0% {
    top: -100%;
  }
  100% {
    top: 0;
  }
}
</style>
