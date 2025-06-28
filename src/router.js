import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";

//URL <> Component
//路由對應表
const routes = [
    //http://localhost:5173/  > HomeView
    {path: "/", component: HomeView},
    //http://localhost:5173/about  > AboutView
    {path:"/about", component: AboutView},
    //http://localhost:5173/xyz  > ContactView
    {path:"/xyz", component: ContactView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
