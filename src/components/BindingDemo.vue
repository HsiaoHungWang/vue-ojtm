<script setup>
import { ref } from 'vue';

//tab enter
const userName = ref('Tom')
const isAdmin = ref(true)
</script>

<template>
    <div>
        // && || ? :
        <!--如果userName有姓名就顯示姓名，沒有姓名就顯示Guest-->
        <p>{{ userName || '訪客' }}</p>
        <!--如果isAdmin為true就顯示管理者登入，如果為false就不顯示任何內容-->
        <p>{{ isAdmin && '管理員登入' }}</p>
        <p>{{ isAdmin ? '管理員登入' : '' }}</p>
    </div>
</template>

<style lang="css" scoped></style>