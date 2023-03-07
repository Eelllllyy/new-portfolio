<template>
<section class="modal-section">
  <h2 class="text-decoration">Сейчас надо будет нажимать на планеты</h2>
    <div class="loader">
      <div class="dot" style="--i:0;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:2;"></div>
      <div class="dot" style="--i:3;"></div>
      <div class="dot" style="--i:4;"></div>
      <div class="dot" style="--i:5;"></div>
      <div class="dot" style="--i:6;"></div>
      <div class="dot" style="--i:7;"></div>
      <div class="dot" style="--i:8;"></div>
      <div class="dot" style="--i:9;"></div>
    </div>
   <button class="btn text-decoration" @click="$router.push('/projects')">Все понятно! В путь</button>
    <div class="loader">
      <div class="dot" style="--i:0;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:2;"></div>
      <div class="dot" style="--i:3;"></div>
      <div class="dot" style="--i:4;"></div>
      <div class="dot" style="--i:5;"></div>
      <div class="dot" style="--i:6;"></div>
      <div class="dot" style="--i:7;"></div>
      <div class="dot" style="--i:8;"></div>
      <div class="dot" style="--i:9;"></div>
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
.modal-section{
  position: relative;
  width: 51vw;
  height: 66vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(4, 15, 43);
  z-index: 5;
  box-shadow: 0 0 62px #ff7e13;
}

.text-decoration {
  font-family: 'CrystalC';
  text-align: center;
}

h2{
  font-weight: 300;
  letter-spacing: 10px;
  font-size: 4vw;
  margin-bottom: 10%;
  color: white;
}
.loader{
  position: relative;
  display: flex;
  animation: buttonAnimate 2s linear infinite;
  animation-direction: alternate;
  animation-delay: 1s
}
.dot{
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  background: #d85600;
  box-shadow: 0 0 5px #d85600,
              0 0 10px #d85600,
              0 0 15px #d85600,
              0 0 20px #d85600,
              0 0 25px #d85600,
              0 0 30px #d85600;
  margin:20px 10px;
  transform: scale(0.1);
  border-radius: 50%;
  animation: animateDot 4s linear infinite;
  animation-delay: calc(0.1s * var(--i)); 
}
.loader:last-child .dot{
  animation-delay: calc(0.1s * var(--i)); 
}
@keyframes animateDot{
  0%{
  transform: scale(0.1);
  }
  10%{
    transform: scale(1);

    }
  50%, 100%{
    transform: scale(0.1);
  }
}
.btn{
  border: none;
  background-color: transparent;
  font-size: 3vw;
  cursor: pointer;
  animation: buttonAnimate 2s linear infinite;
  animation-direction: alternate;
  animation-delay: 1s;
  color: white;
}
@keyframes buttonAnimate{
  from {
    transform: scale(1)
  }
  to {
    transform: scale(0.8)
  }
}
</style>