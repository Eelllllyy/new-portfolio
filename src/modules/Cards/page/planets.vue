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
      <div class="galaxy-content" @click = "openPlanet('sun')">
      </div>
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
      <div class="card-content">
        <h1 class="title">{{ nasaPortal.title }}</h1>
      <p>{{ nasaPortal.description }}</p>
      <p class="text-realize">{{ nasaPortal.realization }}</p>
      <a :href="nasaPortal.git" class="text-git">{{ nasaPortal.git }}
      </a>
      </div>
        <a :href="nasaPortal.git"><img :src='nasaPortal.image'></a>
    </article>
</transition>
<transition name="fade">
    <article class="card" v-if="minosVis">
      <div class="cross">
        <button class="cross-button" @click="minosVis = !minosVis"></button>
      </div>
      <div class="card-content">
        <h1 class="title">{{ minos.title }}</h1>
      <p>{{ minos.description }}</p>
      <p class="text-realize">{{ minos.realization }}</p>
      <a :href="minos.git" class="text-git">{{ minos.git }}
      </a>
      </div>
      <a :href="minos.git"><img :src='minos.image'></a>
    </article>
</transition>
<transition name="fade">
    <article class="card" v-if="airbnbVis">
      <div class="cross">
        <button class="cross-button" @click="airbnbVis = !airbnbVis"></button>
      </div>
      <div class="card-content">
        <h1 class="title">{{ airbnClone.title }}</h1>
      <p>{{ airbnClone.description }}</p>
      <p class="text-realize">{{ airbnClone.realization }}</p>
      <a :href="airbnClone.git" class="text-git">{{ airbnClone.git }}
      </a>
      </div>
      <a :href="airbnClone.git"><img :src='airbnClone.image'></a>
    </article>
</transition>
<transition name="fade">
    <article class="card" v-if="cardsVis">
      <div class="cross">
        <button class="cross-button" @click="cardsVis = !cardsVis"></button>
      </div>
      <div class="card-content">
        <h1 class="title">{{ cards.title }}</h1>
      <p>{{ cards.description }}</p>
      <p class="text-realize">{{ cards.realization }}</p>
      <a :href="cards.git" class="text-git">{{ cards.git }}
      </a>
      </div>
      <a :href="cards.git"><img :src='cards.image'></a>
    </article>
</transition>
<transition name="fade">
    <article class="card" v-if="userVis">
      <div class="cross">
        <button class="cross-button" @click="userVis = !userVis"></button>
      </div>
      <div class="card-content">
        <ul class="ident">
          <li><a href="https://t.me/eelllllyy">
             <font-awesome-icon icon="fa-brands fa-telegram"/> Telegram
          </a></li>
          <li><a href="https://hh.ru/resume/222787aaff0bb781a30039ed1f534877545331"><span class="hh">hh</span> HeadHunter</a></li>
          <li><a href="https://github.com/Eelllllyy">
            <font-awesome-icon icon="fa-brands fa-github" /> GitHub
          </a></li>
          <li><a href="https://www.linkedin.com/in/elina-rezenkova-743b9b258/">
            <font-awesome-icon icon="fa-brands fa-linkedin" /> Linkedin
          </a></li>
          <li><a href="mailto:r-elina-r@yandex.ru">
            <font-awesome-icon icon="fa-regular fa-envelope" /> E-mail
          </a> </li>
        </ul>
      </div>
      <img src='@/modules/Cards/assets/avatar.jpeg'>
    </article>
</transition>
    <!-- <article class="card" v-for="card in arr">
      <div class="card-content">
        <h1 class="title">{{ card.title }}</h1>
      <p>{{ card.description }}</p>
      <p class="text-realize">{{ card.realization }}</p>
      <a :href="card.git" class="text-git">{{ card.git }}
      </a>
      </div>
      <img :src='card.image'>
    </article> -->
  </main>
</template>
<script setup>
import { ref } from 'vue';
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
  transition: opacity 0.7s ease;
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
}
img{
  width: 100%;
  margin: 15px 0;
  box-shadow: 0 0 40px rgb(255, 124, 17);
}
.card{
  position: fixed;
  top:0;
  right: 0;
  width:20%;
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
  width: 16px;
  height: 16px;
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
.text-git{
  text-decoration: none;
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
  animation: mercuryAction 45s linear infinite;
  filter: drop-shadow(0 0 25px rgb(223, 223, 223));
  cursor: pointer;
}
.venera{
  background: url(@/modules/Cards/assets/venera.png) center center / cover;
  width: 150px;
  height: 150px;
  position: absolute;
  animation: veneraAction 55s linear infinite;
  filter: drop-shadow(0 0 25px rgb(231, 231, 231));
  cursor: pointer;
}
.earth{
  background: url(@/modules/Cards/assets/earth.png) center center / cover;
  width: 250px;
  height: 250px;
  position: absolute;
  animation: earthAction 75s linear infinite;
  filter: drop-shadow(0 0 25px rgb(233, 233, 233));
  cursor: pointer;
}
.mars{
  background: url(@/modules/Cards/assets/mars.png) center center / cover;
  width: 120px;
  height: 120px;
  position: absolute;
  animation: marsAction 90s linear infinite;
  filter: drop-shadow(0 0 25px rgb(223, 223, 223));
  cursor: pointer;
}
@keyframes earthAction{
  0% {
    right: 55%;
    top: 0; 
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
    top: -13%; 
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
    top: -3%; 
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
    top: -15%; 
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
</style>