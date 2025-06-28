<script setup>
import { ref } from 'vue';
import mycat from '@/assets/images/cat3.jpg'

//tab enter
const userName = ref('Tom')
const isAdmin = ref(true)

const dog = ref('/images/dog1.jpg')
const cat = ref('/src/assets/images/cat3.jpg')
</script>

<template>
    <div>
        // && || ? :
        <!--如果userName有姓名就顯示姓名，沒有姓名就顯示Guest-->
        <p>{{ userName || '訪客' }}</p>
        <!--如果isAdmin為true就顯示管理者登入，如果為false就不顯示任何內容-->
        <p>{{ isAdmin && '管理員登入' }}</p>
        <p>{{ isAdmin ? '管理員登入' : '' }}</p>
        <img src="/images/dog1.jpg" />
        <img :src="dog" />
        <!--assets 裡的靜態檔案 -->
        <img src="@/assets/images/cat3.jpg" title="不建議這樣用" />
        <img :src="cat" title="不建議這樣用" />
        <img :src="mycat" title="建議這樣用" />

    </div>
</template>

<style lang="css" scoped>
img {
    width: 100px;
}
</style>