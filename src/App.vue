<script setup>

import ApiStyle from './components/ApiStyle.vue';
import BindingComponent from './components/BindingComponent.vue';
import BindingDemo from './components/BindingDemo.vue';
import BMIComponent from './components/BMIComponent.vue';
import ClockComponent from './components/ClockComponent.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import CountComponent from './components/CountComponent.vue';
import EeventBinding from './components/EeventBinding.vue';
import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
import ThirdComponent from './components/ThirdComponent.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';


</script>

<template>
  <h2 id="apph2">Hello, Vue!!</h2>
  <RouterLink to="/">首頁</RouterLink> |
  <RouterLink to="/about">關於我們</RouterLink> |
  <RouterLink to="/xyz">聯絡我們</RouterLink> |
  <RouterLink :to="{ name: 'home' }">首頁</RouterLink> |
  <RouterLink :to="{ name: 'about' }">關於我們</RouterLink> |
  <RouterLink :to="{ name: 'contact' }">聯絡我們</RouterLink> |
  <RouterLink :to="{ name: 'member', params: { id: '10' } }">會員中心</RouterLink> |
  <RouterLink :to="{ name: 'todos' }">待做事項</RouterLink>
  <hr />
  <hr />
  <RouterView></RouterView>


  <!-- <HomeView></HomeView>
  <AboutView></AboutView>
  <ContactView></ContactView> -->
  <!-- <ClockComponent></ClockComponent>
  <BMIComponent></BMIComponent>
  <hr />
  <ComputedDemo></ComputedDemo>
  <hr />
  <EeventBinding></EeventBinding>
  <hr />
  <FirstComponent />
  <SecondComponent />
  <ThirdComponent></ThirdComponent>
  <ApiStyle></ApiStyle>
  <CountComponent></CountComponent>
  <BindingComponent></BindingComponent>
  <BindingDemo></BindingDemo> -->
</template>

<style scoped>
#apph2 {
  color: red;
}
</style>
