<script setup>
import { ref } from 'vue';


const title = ref('Vue.js');
const user = ref({
    firstName: 'John',
    lastName: 'Wu'
})

const getName = () => {
    return `${user.value.lastName} ${user.value.firstName}`;
}
</script>

<template>
    <div>
        <h2>{{ title }} 執行中</h2>
        <p>{{ `登入帳號： ${user.lastName} ${user.firstName}` }}</p>
        <p>{{ getName() }}</p>
        <p>{{ false ? "abc" : "xyz" }}</p>

    </div>
</template>

<style lang="css" scoped></style>