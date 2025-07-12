<script setup>

</script>

<template>
    <div>
        <form>
            <div class="mb-3">
                <label for="InputName" class="form-label">姓名</label>
                <input type="text" class="form-control" id="InputName" name="name">
            </div>
            <div class="mb-3">
                <label for="InputEmail" class="form-label">電子郵件</label>
                <input type="email" class="form-control" id="InputEmail" name="email">

            </div>
            <div class="mb-3">
                <label for="InputAge" class="form-label">年紀</label>
                <input type="number" class="form-control" id="InputAge" name="age">

            </div>
            <div class="mb-3">
                <label for="InputPassword" class="form-label">密碼</label>
                <input type="password" class="form-control" id="InputPassword" name="password">
            </div>
            <div class="mb-3">
                <label for="InputPasswordConfirm" class="form-label">密碼確認</label>
                <input type="password" class="form-control" id="InputPasswordConfirm">
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">頭像</label>
                <input class="form-control" type="file" id="formFile" name="file">
            </div>

            <button type="submit" class="btn btn-primary">新增</button>
        </form>
    </div>
</template>

<style lang="css" scoped></style>