<script setup>
import { onMounted } from 'vue';

//DOM Tree 產生
onMounted(() => {
    document.querySelector('#input1').focus();
});

</script>

<template>
    <div>
        <input type="text" id="input1" />
    </div>
</template>

<style lang="css" scoped></style>