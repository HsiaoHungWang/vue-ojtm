<script setup>
import { useTodoStore } from '@/stores/todo';
const storeTodo = useTodoStore()

</script>

<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> <a
                    href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"> <svg
                        class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg> </a>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <RouterLink :to="{ name: 'home' }" class="nav-link px-2 text-white" activeClass="active">首頁
                        </RouterLink>
                    </li>

                    <li>
                        <RouterLink :to="{ name: 'about' }" class="nav-link px-2 text-white" activeClass="active">關於我們
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'contact' }" class="nav-link px-2 text-white" activeClass="active">聯絡我們
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'member', params: { id: '10' } }" class="nav-link px-2 text-white"
                            activeClass="active">會員中心</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'todos' }" class="nav-link px-2 text-white" activeClass="active">
                            待辦事項 <span class="badge text-bg-secondary">{{ storeTodo.unfinishedQty }}</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'tabs' }" class="nav-link px-2 text-white" activeClass="active">
                            TabsView
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'members' }" class="nav-link px-2 text-white" activeClass="active">
                            會員管理
                        </RouterLink>
                    </li>
                </ul>
                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search"> <input type="search"
                        class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
                </form>
                <div class="text-end"> <button type="button" class="btn btn-outline-light me-2">Login</button> <button
                        type="button" class="btn btn-warning">Sign-up</button> </div>
            </div>
        </div>
    </header>
</template>

<style lang="css" scoped></style>