<template>
  <div class="star one" style="--i:0;"></div>
  <div class="star two" style="--i:1;"></div>
  <div class="star three" style="--i:2;"></div>
  <div class="star four" style="--i:3;"></div>
  <div class="star five" style="--i:4;"></div>
  <div class="star six" style="--i:5;"></div>
  <div class="star seven" style="--i:6;"></div>
  <div class="star eight" style="--i:2;"></div>
  <div class="star nine" style="--i:4;"></div>
  <div class="star ten" style="--i:0;"></div>
</template>
<script setup>
</script>
<style scoped>
.star{
  position: fixed;
  width: 30px;
  height: 30px;
  background: url('../assets/star.svg') center center / cover;
  filter: drop-shadow(0 0 25px rgb(255, 230, 8));
  animation: starAnimate 1.2s linear infinite;
  opacity: 1;
  animation-delay: calc(0.5s * var(--i));
  animation-direction: alternate
}
.star:hover{
  animation: starRotate 3s linear infinite;
  animation-direction: alternate;
}
.two{
  top: 14vw;
  right: 36vh;
}
.three{
  top: 14vw;
  left: 11vh;
}
.four{
  top: 13vw;
  left: 39vh;
}
.five{
  top: 2vw;
  right: 25vh;
}
.one{
  top: 4vw;
  left: 27vh;
}
.six{
  top: 8vw;
  right: 11vh; 
}
.seven{
  top: 10vw;
  right: 50vw; 
}
.eight{
  top: 3vw;
  left: 35vw; 
}
.nine{
  top: 3vw;
  left: 3vw; 
}
.ten{
  top: 4vw;
  right: 35vw; 
}

@keyframes starAnimate{
  from {
    opacity: 1;
    transform: scale(1)
  }
  to {
    opacity: 0.3;
    transform: scale(0.7)
  }
}
@keyframes starRotate{
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}

</style>