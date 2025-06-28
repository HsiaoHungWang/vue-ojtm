<script setup>
import { ref } from 'vue';


const userName = ref('guest');

const submitHandler = () => {
    if (userName.value.trim().length === 0) {
        alert(`請先輸入 ${userName.value}`);
        return;
    }
    alert(`資料送出 ${userName.value}`);

};

// const submitHandler = event => {
//     if (userName.value.trim().length === 0) {
//         event.preventDefault(); // 阻止表單提交
//         alert(`請先輸入 ${userName.value}`);
//         return;
//     }

//     alert(`資料送出 ${userName.value}`);

// };
</script>

<template>
    <div>
        <form action="/do" v-on:submit.prevent="submitHandler">
            <label for="name">姓名：</label>
            <input type="text" name="name" v-model="userName" />

            <button type="submit">送出</button>
        </form>
    </div>
</template>

<style lang="css" scoped></style>