import { defineStore } from "pinia";
import { computed, ref } from "vue";
//useXxxxStore
export const useCounterStore = defineStore('counter',()=>{
    //資料管理程式
    const count = ref(10);
    const doubleCount = computed(()=>count.value*2);
    const add = () => count.value++;

    return{count, doubleCount, add} 
})
