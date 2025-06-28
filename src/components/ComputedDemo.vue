<script setup>
import { ref } from 'vue';

const celsius = ref(0);
</script>

<template>
    <div>
        <label>攝氏：<input type="text" v-model.lazy="celsius"></label>
        <p>華氏：{{ (celsius * 9 / 5) + 32 }}</p>
    </div>
</template>

<style lang="css" scoped></style>