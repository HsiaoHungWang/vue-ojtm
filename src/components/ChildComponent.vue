<script setup>
//宣告父組件使用自訂屬性
//只要屬性名稱一樣，就可以取得父組件藉由屬性傳過來的資料
const props = defineProps({
    message: String,
    likes: Number
})
//定義父組件傳過來的事件名稱
const emit = defineEmits(['myEvent', 'likesEvent'])

const clickHandler = () => {
    //透過 emit() 觸發 myEvent 事件
    emit('myEvent', '這個訊息來自子組件')
    emit('likesEvent', props.likes + 1)
    // console.log(props.likes)
}
</script>

<template>
    <div>
        <h3>Child Component</h3>
        <p>{{ message }}</p>
        <p>按讚次數：{{ likes }}</p>
        <button @click="clickHandler">click</button>
    </div>
</template>

<style lang="css" scoped>
div {
    background-color: silver;
    padding: 10px;
}
</style>