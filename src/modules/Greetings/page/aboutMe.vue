<template>
    <section>
    <div class="greetings-container">
      <h1 style="--i:0">Привет!</h1>
      <h1 style="--i:2">Меня зовут Элина</h1>
      <h1 style="--i:1">Я Frontend разработчик</h1>
    </div>
  <button class="btn" @click="$router.push('/projects')">Отправиться в космические путешествия</button>
  </section>
  <starCards/>
</template>
<script setup>
// import projectCards from '@/modules/Cards/page/projectCards.vue';
import starCards from '@/modules/Sky/components/theStar.vue';
</script>
<style scoped>
@font-face {
  font-family: 'CrystalC';
  src: url(@/modules/Greetings/assets/fonts/CrystalC.otf)
}
section{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, rgb(5, 15, 47) 12%, rgb(8, 24, 62), rgb(0, 0, 0));
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  text-shadow: 1px 2px 10px rgb(255 254 232);
  line-height: 116px;
  color:rgb(5 15 47);
}
.greetings-container::before{
  content: '';
  position: absolute;
  width: 3vw;
  height: 300%;
  transition: 1s;
  box-shadow: 100px 0px 400px rgb(255 255 255);
  animation: boxAnimate 15s linear infinite;
}
.greetings-container::after{
  content: '';
  position: absolute;
  inset: 20px;
  background: #051230;
  transition: 0.5s;
}
h1{
  z-index: 2;
  font-size: 5em;
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
.btn{
  margin-top: 5vw;
  padding: 30px;
  border: 10px solid rgb(24 35 63);
  font: 500 4em / 30px 'CrystalC';
  color: rgb(129 198 219);
  cursor: pointer;
  background: rgb(24 35 63);
  color: rgb(236 255 237);
  text-shadow: 0 0 10px rgb(247, 248, 250);
  box-shadow:  0 0 67px #cdcfdd;
  animation: buttonAnimate 2s linear infinite;
  animation-direction: alternate;
  animation-delay: 2s
}
@keyframes buttonAnimate{
  from {
    transform: scale(1)
  }
  to {
    transform: scale(0.9)
  }
}
</style>