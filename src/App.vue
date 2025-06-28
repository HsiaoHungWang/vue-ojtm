<script setup>

import ApiStyle from './components/ApiStyle.vue';
import BindingComponent from './components/BindingComponent.vue';
import BindingDemo from './components/BindingDemo.vue';
import CountComponent from './components/CountComponent.vue';
import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
import ThirdComponent from './components/ThirdComponent.vue';


</script>

<template>
  <h2 id="apph2">Hello, Vue!!</h2>
  <FirstComponent />
  <SecondComponent />
  <ThirdComponent></ThirdComponent>
  <ApiStyle></ApiStyle>
  <CountComponent></CountComponent>
  <BindingComponent></BindingComponent>
  <BindingDemo></BindingDemo>
</template>

<style scoped>
#apph2 {
  color: red;
}
</style>
