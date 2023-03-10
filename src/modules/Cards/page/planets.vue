<template>
  <main>
    <div class="star one"></div>
    <div class="star two"></div>
    <div class="star three"></div>
    <div class="star four"></div>
    <div class="star five"></div>
    <div class="star six"></div>
    <div class="star seven"></div>
    <div class="star eight"></div>
    <div class="star nine"></div>
    <div class="star ten"></div>
    <div class="star eleven"></div>
    <div class="star twelve"></div>
    <article class="galaxy">
      <div class="galaxy-content" @click = "openPlanet('sun')"></div>
    </article>
    <div class="mercury" @click = "openPlanet('mercury')"></div>
    <div class="venera" @click = "openPlanet('venera')"></div>
    <div class="earth" @click = "openPlanet('earth')"></div>
    <div class="mars" @click = "openPlanet('mars')"></div>
    <transition name="fade">
      <article class="card" v-if="nasaVis">
      <div class="cross">
        <button class="cross-button" @click="nasaVis = !nasaVis"></button>
      </div>
      <div>
        <h1 class="title">{{ nasaPortal.title }}</h1>
        <p>{{ nasaPortal.description }}</p>
        <p class="text-realize">{{ nasaPortal.realization }}</p>
        <a :href="nasaPortal.git" target="_blank"> <font-awesome-icon icon="fa-brands fa-github" size="2x"/> <h2 class="text-git">GitHub</h2></a>
      </div>
      <a :href="nasaPortal.git" target="_blank"><img :src='nasaPortal.image'></a>
    </article>
</transition>
  <transition name="fade">
    <article class="card" v-if="minosVis">
      <div class="cross">
        <button class="cross-button" @click="minosVis = !minosVis"></button>
      </div>
      <div>
        <h1 class="title">{{ minos.title }}</h1>
        <p>{{ minos.description }}</p>
        <p class="text-realize">{{ minos.realization }}</p>
        <a :href="minos.git" target="_blank"> <font-awesome-icon icon="fa-brands fa-github" size="2x"/> <h2 class="text-git">GitHub</h2></a>
      </div>
      <a :href="minos.git" target="_blank"><img :src='minos.image'></a>
    </article>
  </transition>
  <transition name="fade">
    <article class="card" v-if="airbnbVis">
      <div class="cross">
        <button class="cross-button" @click="airbnbVis = !airbnbVis"></button>
      </div>
      <div>
        <h1 class="title">{{ airbnClone.title }}</h1>
        <p>{{ airbnClone.description }}</p>
        <p class="text-realize">{{ airbnClone.realization }}</p>
        <a :href="airbnClone.git" target="_blank"><font-awesome-icon icon="fa-brands fa-github" size="2x" /> <h2 class="text-git">GitHub</h2></a>
      </div>
      <a :href="airbnClone.git" target="_blank"><img :src='airbnClone.image'></a>
    </article>
  </transition>
  <transition name="fade">
    <article class="card" v-if="cardsVis">
      <div class="cross">
        <button class="cross-button" @click="cardsVis = !cardsVis"></button>
      </div>
      <div>
        <h1 class="title">{{ cards.title }}</h1>
        <p>{{ cards.description }}</p>
        <p class="text-realize">{{ cards.realization }}</p>
        <a :href="cards.git" target="_blank"><font-awesome-icon icon="fa-brands fa-github" size="2x"/> <h2 class="text-git">GitHub</h2></a>
      </div>
      <a :href="cards.git" target="_blank"><img :src='cards.image'></a>
    </article>
  </transition>
  <transition name="fade">
    <article class="card-about-me" v-if="userVis">
      <div class="cross">
        <button class="cross-button" @click="userVis = !userVis"></button>
      </div>
      <div class="card-content">
        <div class="ident">
          <a href="https://t.me/eelllllyy" target="_blank">
             <font-awesome-icon icon="fa-brands fa-telegram" size="2x"/>
          </a>
          <a href="https://hh.ru/resume/222787aaff0bb781a30039ed1f534877545331" class="hh" target="_blank">HH</a>
          <a href="https://github.com/Eelllllyy" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" size="2x"/>
          </a>
          <a href="https://www.linkedin.com/in/elina-rezenkova-743b9b258/" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="2x"/> 
          </a>
          <a href="mailto:r-elina-r@yandex.ru" target="_blank">
            <font-awesome-icon icon="fa-regular fa-envelope" size="2x"/>
          </a> 
        </div>
        <img src='@/modules/Cards/assets/avatar.jpeg' class="my-image">
      </div>
    </article>
  </transition>
  </main>
</template>
<script setup>
import { ref, onMounted, onUpdated } from 'vue';
const nasaVis = ref(false)
const minosVis = ref(false)
const airbnbVis = ref(false)
const cardsVis = ref(false)
const userVis = ref(false)
const openPlanet = (planet) => {
  switch(planet){
    case 'mercury': {
      nasaVis.value = !nasaVis.value
      minosVis.value = false
      airbnbVis.value = false
      cardsVis.value = false
      userVis.value = false
    }; break
    case 'venera': {
      minosVis.value = !minosVis.value
      nasaVis.value = false
      airbnbVis.value = false
      cardsVis.value = false
      userVis.value = false
    }; break
    case 'mars': {
      airbnbVis.value = !airbnbVis.value
      minosVis.value = false
      nasaVis.value = false
      cardsVis.value = false
      userVis.value = false
    }; break
    case 'earth': {
      cardsVis.value = !cardsVis.value
      minosVis.value = false
      airbnbVis.value = false
      nasaVis.value = false
      userVis.value = false
    }; break
    case 'sun': {
      userVis.value = !userVis.value
      cardsVis.value = false
      minosVis.value = false
      airbnbVis.value = false
      nasaVis.value = false
    }; break
  }
}
onMounted(() => {
    if(window.innerWidth < 500){
      window.moveTo(100, 100)
    }
  })
onUpdated(() => {
  if(window.innerWidth < 500){
      window.moveTo(100, 100)
    }
})
const nasaPortal = {
  title: 'Nasa portal',
  description: 'Корпоративный портал для сотрудников, в котором реализована аутентификация с помощью JWT, а так же восстановление пароля через почту.На данном портале есть возможность оставить заявку на различные услуги, начиная от обращения к шефу и заканчивая заявлением на отпуск.Можно просматривать список сотрудников, который я реализовала в двух вариациях: c обычной пагинацией; c пагинацией в виде инфинити скролл.',
  image: require('@/modules/Cards/assets/nasa_portal.png'),
  realization: 'Проект реализован с помощью Vue 3, composition API , vue-router, pinia',
  git: 'https://github.com/Eelllllyy/nasa-portal'
}
const minos = {
  title: 'Minos',
  description: 'Лендинг игры в телеграмме с кроссбраузерной версткой.',
  image: require('@/modules/Cards/assets/minos.png'),
  realization: 'Проект реализован с помощью Vue 3, composition API, swiper',
  git: 'https://github.com/Eelllllyy/minos'
}
const airbnClone = {
  title: 'Airbnb clone',
  description: ' Клон сайта для размещения и поиска краткосрочной аренды — airbnb. В данном проекте я реализовала аутентификацию и регистрацию пользователя, возможность просмотра списка и отдельного объявления, полнотекстового поиска и пагинации.',
  image: require('@/modules/Cards/assets/airbnb_clone.png'),
  realization: 'Проект реализован с помощью Vue 3, composition API , vue-router, pinia, swiper',
  git: 'https://github.com/Eelllllyy/airbnb-clone'
}
const cards = {
  title: 'Cards',
  description: 'Интерактивный проект-игра с аутентификацией по секретному коду, основная задумка которого заключалась в том, чтобы при помощи интеграции с телеграмм ботом открывать карточки с изображениями, которые в последующем преобразуются в одну единую картинку.',
  image: require('@/modules/Cards/assets/card.png'),
  realization: 'Проект реализован с помощью Vue 3, composition API , vue-router, WebSocket',
  git: 'https://github.com/Eelllllyy/cards'
}
const arr = [nasaPortal, minos, airbnClone, cards]
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@font-face {
  font-family: 'CotlinC';
  src: url(@/modules/Cards/assets/fonts/CotlinC.otf)
}
main{
  width: 100%;
  height: 100vh;
  background: linear-gradient(270deg, rgb(10, 10, 0), rgb(3, 12, 34));
  position: relative;
  overflow: hidden;
  animation: ani 2s forwards;
}
@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
img{
  width: 100%;
  height: 100%;
  margin: 15px 0;
  box-shadow: -6px 6px 10px rgb(15 15 15 / 56%);;
}
.card{
  position: fixed;
  top:0;
  right: 0;
  width:30%;
  display: flex;
  flex-direction: column;
  font-family: 'CotlinC';
  padding: 30px;
  margin: 30px;
  color: black;
  background-color:rgba(255, 255, 255, 0.781);
  box-shadow: 0 0 40px rgb(179, 179, 179);
}
.cross{
  display: flex;
  justify-content: flex-end;
}
.cross-button{
  background: url(@/modules/Cards/assets/cross.svg) center center / cover;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
}
.title{
  font-size: 40px;
  padding-bottom: 10px;
}
p{
  font-size: 20px;
}
.text-realize{
  padding: 15px 0;
}
a{
  text-decoration: none;
  color:black;
  font-family: 'CotlinC';
}
.galaxy{
  position: fixed;
  top:0;
  bottom: 0;
  left:0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.galaxy-content{
  background: url(@/modules/Cards/assets/sun.png) center center / cover;
  width: 700px;
  height: 700px;
  filter: drop-shadow(0 0 25px rgb(250, 141, 15));
  animation: galaxyRotate 45s linear infinite;
  cursor: pointer;
}

.mercury{
  background: url(@/modules/Cards/assets/mercury.png) center center / cover;
  width: 100px;
  height: 100px;
  position: absolute;
  animation: mercuryAction 39s linear infinite;
  filter: drop-shadow(0 0 15px rgb(223, 223, 223));
  cursor: pointer;
}
.venera{
  background: url(@/modules/Cards/assets/venera.png) center center / cover;
  width: 150px;
  height: 150px;
  position: absolute;
  animation: veneraAction 47s linear infinite;
  filter: drop-shadow(0 0 15px rgb(231, 231, 231));
  cursor: pointer;
}
.earth{
  background: url(@/modules/Cards/assets/earth.png) center center / cover;
  width: 250px;
  height: 250px;
  position: absolute;
  animation: earthAction 70s linear infinite;
  filter: drop-shadow(0 0 15px rgb(233, 233, 233));
  cursor: pointer;
}
.mars{
  background: url(@/modules/Cards/assets/mars.png) center center / cover;
  width: 120px;
  height: 120px;
  position: absolute;
  animation: marsAction 100s linear infinite;
  filter: drop-shadow(0 0 15px rgb(223, 223, 223));
  cursor: pointer;
}
@keyframes earthAction{
  0% {
    right: 55%;
    top: -39%; 
    transform: rotate(-360deg);
  }
  25%{
    right: 65%;
    top: 25%;
  }
  50%{
    right: 77; 
    top: 50%;
  }
  75%{
    right: 65%; 
    top: 75;
  }
  100%{ 
    right: 55%; 
    top: 100%;
    transform: rotate(0);
  }
}
@keyframes marsAction{
  0% {
    right: 72%;
    top: -23%; 
    transform: rotate(360deg);
  }
  25%{
    right: 82%;
    top: 25%;
  }
  50%{
    right: 84%; 
    top: 50%;
  }
  75%{
    right: 82%; 
    top: 75%;
  }
  100%{ 
    right: 72%; 
    top: 100%;
    transform: rotate(0);
  }
}
@keyframes mercuryAction{
  0% {
    right: 30%;
    top: -10%; 
    transform: rotate(-360deg);
  }
  25%{
    right: 40%;
    top: 25%;
  }
  50%{
    right: 44%; 
    top: 50%;
  }
  75%{
    right: 40%; 
    top: 75;
  }
  100%{ 
    right: 30%; 
    top: 110%;
    transform: rotate(0);
  }
}
@keyframes veneraAction{
  0% {
    right: 41%;
    top: -20%; 
    transform: rotate(360deg);
  }
  25%{
    right: 51%;
    top: 25%;
  }
  50%{
    right: 55%; 
    top: 50%;
  }
  75%{
    right: 51%; 
    top: 75;
  }
  100%{ 
    right: 41%; 
    top: 100%;
    transform: rotate(0);
  }
}
@keyframes galaxyRotate{
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
.hh{
  font-size: 20px;
  font-weight: 700;
}
.star{
  position: fixed;
  width: 30px;
  height: 30px;
  background: url('@/modules/Sky/assets/star.svg') center center / cover;
  filter: drop-shadow(0 0 25px rgb(255, 230, 8));
  animation: starAnimate 1.2s linear infinite;
  opacity: 1;
  animation-delay: calc(0.5s * var(--i));
  animation-direction: alternate
}
.two{
  top: 28vw;
  right: 65vh;
}
.three{
  bottom: 14vw;
  left: 11vh;
}
.four{
  top: 21vw;
  left: 23vh;
}
.five{
  top: 9vw;
  right: 25vh;
}
.one{
  top: 6vw;
  left: 33vh;
}
.six{
  top: 2vw;
  right: 11vh; 
}
.seven{
  top: 10vw;
  right: 50vw; 
}
.eight{
  bottom: 4vw;
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
.eleven{
  bottom: 29vw;
  left: 30vw;
}
.twelve{
  bottom: 18vw;
  left: 50vw;
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
.text-git{
  display: inline-block;

}
.card-content{
  display: flex;
  justify-content: center;
}
.ident{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 31px;
}
.my-image{
  width: 70%;
  height: 70%;
}
.card-about-me{
  width: 26%;
  position: fixed;
  top:0;
  right: 0;
  display: flex;
  flex-direction: column;
  font-family: 'CotlinC';
  padding: 30px;
  margin: 30px;
  color: black;
  background-color:rgba(255, 255, 255, 0.781);
  box-shadow: 0 0 10px rgb(179, 179, 179);
}
@media(max-width:1670px){
  .galaxy-content{
    width: 540px;
    height: 540px;
  }
  .earth{
    width: 200px;
    height: 200px;
  }
  .venera{
    width: 140px;
    height: 140px;
  }
  .mars{
    width: 115px;
    height: 115px;
  }
  @keyframes marsAction{
  0% {
    right: 72%;
    top: -23%; 
    transform: rotate(360deg);
  }
  25%{
    right: 82%;
    top: 25%;
  }
  50%{
    right: 84%; 
    top: 50%;
  }
  75%{
    right: 82%; 
    top: 75%;
  }
  100%{ 
    right: 72%; 
    top: 100%;
    transform: rotate(0);
  }
  }
}
@media(max-width: 1250px){
  .galaxy-content{
    width: 430px;
    height: 430px;
  }
  .earth{
    width: 170px;
    height: 170px;
  animation: earthAction 62s linear infinite;
  }
  .venera{
    width: 120px;
    height: 120px;
    animation: veneraAction 37s linear infinite;
  }
  .mercury{
    width: 90px;
    height: 90px;
    animation: mercuryAction 27s linear infinite;
  }
  .mars{
    width: 105px;
    height: 105px;
  }
}
@media(max-width: 900px){
  .galaxy-content{
    width: 430px;
    height: 430px;
  }
  .earth{
    top: 50%;
    right: 84%;
    animation: galaxyRotate 45s linear infinite
  }
  .venera{
    top: 16%;
    right: 54%;
    animation: galaxyRotate 45s linear infinite
  }
  .mercury{
    top: 25%;
    right: 1%;
    animation: galaxyRotate 45s linear infinite
  }
  .mars{
    top: 89%;
    right: 34%;
    animation: galaxyRotate 45s linear infinite
  }
  .five{
    top: 33vw;
    right: 25vh;
  }
  .seven{
    top: 46vw;
    right: 68vw;
  }
  .four{
    top: 73vw;
    left: 23vh;
  }
  .twelve{
    bottom: 17vw;
    left: 80vw;
  }
  .eleven{
    bottom: 29vw;
    left: 49vw;
  }
  .ten{
    top: 15vw;
    right: 0vw;
  }
  .star{
    width: 15px;
    height: 15px;
  }
  .card{
    width: 60%;
  }
  .card-about-me{
    width: 50%;
  }
}
@media(max-width: 500px){
  .galaxy-content{
    width: 430px;
    height: 430px;
  }
  .earth{
    top: 62%;
    right: 82%;
  }
  .venera{
    top: 11%;
    right: 54%;
  }
  .mercury{
    top: 25%;
    right: 0%;
  }
  .mars{
    top: 70%;
    right: 25%;
  }
  .card, .card-about-me{
    width: auto;
    margin: 8px;
    padding-top:20px;
  }
  p{
    font-size: 15px;
  }
  .text-realize{
    padding: 0;
  }
}
@media(max-width: 400px){
  .galaxy-content {
    width: 289px;
    height: 289px;
  }
  .earth{
    top: 62%;
    right: 74%;
  }
  .venera{
    top: 6%;
    right: 55%;
  }
  .mercury{
    top: 20%;
    right: 0%;
  }
  .mars{
    top: 85%;
    right: 25%;
  }
  .one{
    top: 31vw;
    left: 28vh;
  }
  .eleven{
    bottom: 52vw;
    left: 49vw;
  }
  .three{
    bottom: 29vw;
    left: 11vh;
  }
  .five{
    top: 94vw;
    right: 40vh;
  }
}
</style>