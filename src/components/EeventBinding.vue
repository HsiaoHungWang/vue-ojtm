<script setup>
import { ref } from 'vue';


const userName = ref('guest');
const age = ref(20);
const educationValue = ref('')
const educationText = ref('')
const skills = ref([])
const gender = ref('')

const submitHandler = () => {
    if (userName.value.length === 0) {
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

const changeHandler = event => {
    // console.log(event.target);
    //多個option會產生options的集合
    //selectedIndex表示被選到option的index
    const idx = event.target.selectedIndex;
    // console.log(event.target.options[idx].value);
    // console.log(event.target.options[idx].text);
    educationText.value = event.target.options[idx].text;
};
</script>

<template>
    <div>
        <form action="/do" v-on:submit.prevent="submitHandler">
            <label for="name">姓名：</label>

            <input type="text" name="name" v-model.lazy.trim="userName" />
            <p>目前姓名：{{ userName }}</p>
            <label for="age">年紀
                <input v-model.number="age" name="age" />
            </label>
            <p>目前年紀：{{ age }} {{ typeof age }}</p>
            <label>性別： </label>
            <label><input type="radio" v-model="gender" value="male" />男</label>
            <label><input type="radio" v-model="gender" value="female" />女</label>

            <p>性別是：{{ gender }}</p>
            <label>學歷：
                <select v-model="educationValue" @change="changeHandler">
                    <option value="" disabled>請選擇</option>
                    <option value="highschool">高中</option>
                    <option value="bachelor">大學</option>
                    <option value="master">碩士</option>
                    <option value="phd">博士</option>
                </select>
            </label>
            <p>選擇的學歷： {{ educationValue }} {{ educationText }}</p>
            <label>專長：</label>
            <label><input type="checkbox" value="C#" v-model="skills" /> C#</label>
            <label><input type="checkbox" value="SQL" v-model="skills" /> SQL</label>
            <label><input type="checkbox" value="JS" v-model="skills" /> JavaScript</label>
            <label><input type="checkbox" value="Vue3" v-model="skills" /> Vue.js</label>
            <p>選擇的專長：{{ skills }}</p>
            <button type="submit">送出</button>
        </form>
    </div>
</template>

<style lang="css" scoped></style>