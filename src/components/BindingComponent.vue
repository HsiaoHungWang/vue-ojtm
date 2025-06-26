<script setup>
import { ref } from 'vue';

// console.log(new Date().getDay()); // 0-6, 0表示星期日

const title = ref('Vue.js');
const user = ref({
    firstName: 'John',
    lastName: 'Wu'
})
const week = ref(["日", "一", "二", "三", "四", "五", "六"]);
const author = ref({
    books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})
// console.log(author.value.books.length); //3

const getName = () => {
    return `${user.value.lastName} ${user.value.firstName}`;
}
</script>

<template>
    <div>
        <!--{{Text Interpolation插值}} -->
        <h2>{{ title }} 執行中</h2>
        <p>{{ `登入帳號： ${user.lastName} ${user.firstName}` }}</p>
        <p>{{ getName() }}</p>
        <p>{{ false ? "abc" : "xyz" }}</p>
        <p>星期 {{ week[new Date().getDay()] }}</p>
        <p>出版：{{ author.books.length > 0 ? "有" : "沒有" }}</p>
    </div>
</template>

<style lang="css" scoped></style>