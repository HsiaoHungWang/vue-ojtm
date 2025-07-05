<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

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
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import DirectiveComponent from './components/DirectiveComponent.vue';
import ChildComponent from './components/ChildComponent.vue';
import { ref } from 'vue';


const message = ref('這個訊息來自App.vue')
const count = ref(50)
const myEventHandler = data => {
  //data 使用接收子組件傳過來的資料
  console.log(data);
}
const likesEventHandler = data => {
  count.value = data
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <JumbotronComponent></JumbotronComponent>
  <div class="container mt-3">
    <RouterView></RouterView>
    <hr />
    <!-- <DirectiveComponent></DirectiveComponent> -->
    <!--:message="message"-->
    <!--message、likes 是自訂的屬性-->
    <!--用來將資料傳遞給子組件-->
    <!-- <ChildComponent :message :likes="count" @myEvent="myEventHandler" @likesEvent="likesEventHandler"></ChildComponent> -->
    <!--myEvent 自訂的事件、myEventHandler 是myEvent事件觸發後會執行的function-->
    <!--myEvent 事件會在子組件透過 emit('myEvent') 來觸發-->
    <!-- <h2 id="apph2">Hello, Vue!!</h2> -->
    <!-- <RouterLink to="/">首頁</RouterLink> |
  <RouterLink to="/about_ispan">關於我們</RouterLink> |
  <RouterLink to="/contact">聯絡我們</RouterLink> | -->





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
  </div>
  <FooterComponent></FooterComponent>
</template>

<style scoped>
#apph2 {
  color: red;
}

.active {
  background-color: yellowgreen;
}
</style>
