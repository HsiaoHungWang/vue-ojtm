<script setup>
import { useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore();

</script>

<template>
    <div>
        <h2>Contact Page</h2>
        <p>Count:{{ storeCounter.count }}</p>
        <p>DoubleCount:{{ storeCounter.doubleCount }}</p>
    </div>
</template>

<style lang="css" scoped></style>