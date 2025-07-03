<template>
    <h2 id="myH">第一個 Component</h2>
    <input type="text" />
</template>
<style scoped>
h2 {
    color: green;
}
</style>
<script setup>
import { onBeforeMount, onMounted } from 'vue';




//tab
//Component Lifecycle Hooks
onBeforeMount(() => {
    console.log('組件即將掛載');
})

onMounted(() => {
    console.log('組件已掛載，DOMTree 可用');
    const myH = document.querySelector('#myH');
    console.log('myH：', myH);
})
</script>