<script setup>
import FirstComponent from '@/components/FirstComponent.vue';
import CountComponent from '@/components/CountComponent.vue';
import SecondComponent from '@/components/SecondComponent.vue';
import { ref } from 'vue';

const tabs = ref([
    { "name": "First", "component": FirstComponent },
    { "name": "Second", "component": SecondComponent },
    { "name": "Count", "component": CountComponent }
])
const activedIndex = ref(0)
const clickHandler = index => {
    activedIndex.value = index
}

</script>

<template>
    <div>
        <h2>Tabs View</h2>

        <hr />
        <ul class="nav nav-pills">
            <li class="nav-item" v-for="(tab, idx) in tabs">
                <a class="nav-link" :class="{ active: activedIndex === idx }" @mouseover="clickHandler(idx)" href="#">{{
                    tab.name }}</a>
            </li>
        </ul>
        <KeepAlive>
            <component :is="tabs[activedIndex].component"></component>
        </KeepAlive>
    </div>
</template>

<style lang="css" scoped></style>