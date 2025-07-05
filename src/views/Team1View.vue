<script setup>
import { useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore();

</script>

<template>
    <div>
        <h3>Team1 Page</h3>
        <p>Count:{{ storeCounter.count }}</p>
        <p>DoubleCount:{{ storeCounter.doubleCount }}</p>
        <button @click="storeCounter.add">Add</button>
    </div>
</template>

<style lang="css" scoped></style>