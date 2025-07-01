<script setup>
import { ref } from 'vue';

const message = ref('<u>Hello, Vue!!</u>');
const isLoading = ref(true);
const isLoggedIn = ref(true);
setInterval(() => {
    isLoading.value = false;
}, 3000);

const regions = ref([
    { "code": "100", "name": "中正區" },
    { "code": "103", "name": "大同區" },
    { "code": "104", "name": "中山區" },
    { "code": "106", "name": "大安區" }
])
</script>

<template>
    <div>
        <h3>{{ message }}</h3>
        <h3 v-text="message"></h3>
        <h3 v-html="message"></h3>
        <img src="/images/loading.gif" alt="loading" v-show="isLoading" />
        <div v-if="isLoggedIn">
            <button>登出</button>
        </div>
        <div v-else>
            <button>登入</button>
        </div>
        <!--v-for-->
        <select>
            <option v-for="(region, idx) in regions" :key="region.code" :value="region.code">{{ idx }}-{{ region.name }}
            </option>
        </select>
    </div>
</template>

<style lang="css" scoped></style>