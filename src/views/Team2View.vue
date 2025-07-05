<script setup>
import { useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore()
</script>

<template>
    <div>
        <h3>Team2 Page</h3>
        <p>Count:{{ storeCounter.count }}</p>
        <p>DoubleCount:{{ storeCounter.doubleCount }}</p>
    </div>
</template>

<style lang="css" scoped></style>