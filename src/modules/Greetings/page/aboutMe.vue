<template>
  <section>
    <div class="greetings-container">
      <h1 style="--i:0">Привет!</h1>
      <h1 style="--i:2">Меня зовут Элина</h1>
      <h1 style="--i:1">Я Frontend разработчик</h1>
    </div>
  </section>
</template>
<script setup>
</script>
<style scoped>
@font-face {
  font-family: 'CrystalC';
  src: url(@/modules/Greetings/assets/fonts/CrystalC.otf)
}
section{
  width: 100vw;
  height: 100vh;
  background-color: rgb(3, 3, 68);
  display: flex;
  justify-content: center;
  align-items: center;
}
.greetings-container{
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: 'CrystalC';
  text-shadow: 1px 2px 10px rgb(190, 14, 190);
  line-height: 116px;
  color:rgb(3, 3, 68);
}
.greetings-container::before{
  content: '';
  position: absolute;
  width: 3vw;
  height: 300%;
  transition: 1s;
  box-shadow: 100px 0px 400px rgb(190, 14, 190);
  animation: boxAnimate 8s linear infinite;
}
.greetings-container::after{
  content: '';
  position: absolute;
  inset: 20px;
  background: rgb(3, 3, 68);
  transition: 0.5s;
}
h1{
  z-index: 2;
  font-size: 4em;
  animation: textAnimate 3s linear infinite;
  animation-delay: calc(1.4s * var(--i));
  opacity: 0.7;
}

@keyframes boxAnimate{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes textAnimate{
  0%, 90%{
    opacity: 0.7;
  }
  50%, 75%{
    opacity: 0.8;
  }
  100%{
    opacity: 1;
  }
}
</style>