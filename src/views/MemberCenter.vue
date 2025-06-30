<script setup>
import { useRoute } from 'vue-router'
defineProps({
    id: String
})

const route = useRoute()
const id = route.params.id
console.log('會員中心的 id:', id)

</script>

<template>
    <div>
        <h2>會員編號{{ $route.params.id }}的會員中心</h2>
        <p>{{ id }}</p>
    </div>
</template>

<style lang="css" scoped></style>