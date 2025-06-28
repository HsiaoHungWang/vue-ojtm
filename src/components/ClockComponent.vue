<script setup>
import { ref } from 'vue';

const formatTime = (today) => {
    const hours = today.getHours().toString().padStart(2, '0');  //03
    const minutes = today.getMinutes().toString().padStart(2, '0'); //05
    const seconds = today.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

const clock = ref(formatTime(new Date()));

window.setInterval(() => {
    const today = new Date();
    clock.value = formatTime(today);
}, 1000);
</script>

<template>
    <div>
        <h2>{{ clock }}</h2>
    </div>
</template>

<style lang="css" scoped></style>