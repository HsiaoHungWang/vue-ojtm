<script setup>
import { ref, watch, watchEffect } from 'vue';

const formatTime = (today) => {
    const hours = today.getHours().toString().padStart(2, '0');  //03
    const minutes = today.getMinutes().toString().padStart(2, '0'); //05
    const seconds = today.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

const user = ref({
    name: "Jack",
    address: {
        road: "台北路",
        city: "台北市"
    }
})

const clock = ref(formatTime(new Date()));

watch(clock, (newTime, oldTime) => {
    console.log(`Clock changed from ${oldTime} to ${newTime}`);
}, { immediate: true }); //{ once: true }

watchEffect(() => {
    console.log(`Current time is: ${clock.value}`);
});

const changeTime = () => {
    const today = new Date();
    clock.value = formatTime(today);
};

// window.setInterval(() => {
//     const today = new Date();
//     clock.value = formatTime(today);
// }, 1000);
</script>

<template>
    <div>
        <button @click="changeTime()">更新時間</button>
        <h2>{{ clock }}</h2>
    </div>
</template>

<style lang="css" scoped></style>