<script setup>
import MemberAdd from '@/components/MemberAdd.vue';
import { ref } from 'vue';


const members = ref([]);

const apiUrl = `${import.meta.env.VITE_API_BASEURL}/Members`
const staticUrl = `${import.meta.env.VITE_STATICURL}/images`

//讀取所有會員資料
const loadMembers = async () => {
    const response = await fetch(apiUrl);  //GET
    const datas = await response.json();
    members.value = datas;
}

//刪除會員資料
const deleteHandler = async (id) => {
    if (!window.confirm('真的要刪除嗎?')) return;

    const deleteApi = `${apiUrl}/${id}`;
    const response = await fetch(deleteApi, {
        method: 'DELETE'
    })

    if (response.ok) {
        alert('會員刪除成功!!');
        loadMembers();
    }

}

//新增會員資料
const addMemberHandler = async (fd) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: fd
    })
    if (response.ok) {
        alert('新增成功');
        loadMembers();
    }
}

loadMembers();
</script>

<template>
    <div>
        <h3>會員管理</h3>
        <div class="row">
            <div class="col-9">
                <table class="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>頭像</th>
                            <th>姓名</th>
                            <th>電子郵件</th>
                            <th>年紀</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in members" :key="member.memberId">
                            <td><img :src="`${staticUrl}/${member.fileName}`" class="img-thumbnail"
                                    style="width:100px" /></td>
                            <td>{{ member.name }}</td>
                            <td>{{ member.email }}</td>
                            <td>{{ member.age }}</td>
                            <td>
                                <button @click="deleteHandler(member.memberId)" class="btn btn-danger"><i
                                        class="bi bi-trash-fill"></i> 刪除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-3">
                <MemberAdd @addMember="addMemberHandler"></MemberAdd>
            </div>
        </div>

    </div>
</template>

<style lang="css" scoped></style>