<script setup>
import { computed, ref } from 'vue';

const celsius = ref(0);

const convertToFahrenheit = () => {
    console.log('convertToFahrenheit called');
    return (celsius.value * 9 / 5) + 32;
};

// const fahrenheit = computed(() => {
//     console.log('fahrenheit computed called');
//     return (celsius.value * 9 / 5) + 32;
// });
const fahrenheit = computed(() => (celsius.value * 9 / 5) + 32);
</script>

<template>
    <div>
        <label>攝氏：<input type="text" v-model.lazy="celsius"></label>
        <p>華氏：{{ (celsius * 9 / 5) + 32 }}</p>
        <p>華氏：{{ convertToFahrenheit() }}{{ convertToFahrenheit() }}{{ convertToFahrenheit() }}</p>
        <p>華氏：{{ fahrenheit }}{{ fahrenheit }}{{ fahrenheit }}</p>
    </div>
</template>

<style lang="css" scoped></style>