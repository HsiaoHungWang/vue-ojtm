<script setup>
import { computed, ref } from 'vue';

const weight = ref(70);
const height = ref(170);
const bmi = computed(() => (weight.value / ((height.value / 100) ** 2)).toFixed(2))
</script>

<template>
    <div>
        <div><label>體重(kg)：
                <input type="number" name="weight" v-model.lazy.number="weight" /></label></div>
        <div>
            <label>身高(cm)：
                <input type="number" name="height" v-model.lazy.number="height" /></label>
        </div>
        <p>BMI：{{ bmi }}</p>

    </div>
</template>

<style lang="css" scoped></style>