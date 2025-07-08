<script setup>
import { ref } from 'vue';

const categories = ref([]);

const apiUrl = 'https://localhost:7152/api/Categories';
fetch(apiUrl)
    .then(response => response.json())
    .then(datas => categories.value = datas);

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