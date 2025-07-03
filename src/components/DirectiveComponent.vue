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

const selectedRegion = ref("");
const user = ref({ "name": "Jack", "age": 30, "email": "Jack@gmail.com" })
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
        <!--v-for 讀取陣列-->
        <select v-model="selectedRegion">
            <option value="">請選擇</option>
            <!--region 表示 { "code": "100", "name": "中正區" }-->
            <option v-for="(region, idx) in regions" :key="region.code" :value="region">{{ idx }}-{{ region.name }}
            </option>
        </select>
        <span>{{ selectedRegion }}{{ selectedRegion.name }}{{ selectedRegion.code }}</span>
        <!--v-for 讀取物件-->
        <ul>
            <li v-for="(value, key) in user">{{ key }} {{ value }}</li>
        </ul>
        <!-- v-for 產生數字 -->
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" v-for="i in 8"><a class="page-link" href="#">{{ i }}</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="css" scoped></style>