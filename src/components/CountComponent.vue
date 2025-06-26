<script setup>
import { reactive, ref } from 'vue';

const count = ref(100);
const add = () => {
    //透過ref()所定義的變數
    //取值時要透過value屬性
    count.value++;
};
</script>

<template>
    <div>
        <button @click="add">{{ count }}</button>
    </div>
</template>

<style lang="css" scoped></style>