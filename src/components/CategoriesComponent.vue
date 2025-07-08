<script setup>
import { onMounted, ref, watchEffect } from 'vue';

const categories = ref([]);

const apiUrl = 'https://localhost:7152/api/Categories';
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(datas => categories.value = datas);

//Component載入時不會執行
// watch(categories,()=>{})

//監看Component中響應式資料的異動
//Component載入時就會執行
// watchEffect(async () => {
//     const response = await fetch(apiUrl);
//     const datas = await response.json();
//     categories.value = datas;
// })

//Component 掛載到 DOM 時
// onMounted(async () => {
//     用DOM語法控制Component
//     const response = await fetch(apiUrl);
//     const datas = await response.json();
//     categories.value = datas;
// })

//IIFE
(async () => {
    const response = await fetch(apiUrl);
    const datas = await response.json();
    categories.value = datas;
})();

</script>

<template>
    <div>
        <h3>Categories</h3>
        <ul>
            <li v-for="category in categories" :key="category.categoryId">{{ category.categoryName }}</li>
        </ul>
    </div>
</template>

<style lang="css" scoped></style>