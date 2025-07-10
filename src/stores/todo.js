import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore('todo',()=>{
    //計算未完成的待辦事項
    let todos = JSON.parse(localStorage.getItem('todos'));
   if(!todos){
       todos = [];
    }
    
    const activeTodos = todos.filter(todo => !todo.completed)
    const unfinishedQty = ref(activeTodos.length) ;

    const unfinishedQtyChange = qty =>{
        unfinishedQty.value = qty;
    }

    return {unfinishedQty, unfinishedQtyChange}
})