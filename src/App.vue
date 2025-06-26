<script setup>
import ApiStyle from './components/ApiStyle.vue';
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
</template>

<style scoped>
#apph2 {
  color: red;
}
</style>
