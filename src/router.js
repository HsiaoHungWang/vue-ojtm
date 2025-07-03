import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import Team1View from "./views/Team1View.vue";
import Team2View from "./views/Team2View.vue";
import MemberCenter from "./views/MemberCenter.vue";
import TodosView_Full from "./views/TodosView_Full.vue";
import NotFound from "./views/NotFound.vue";
import TabsView from "./views/TabsView.vue";


//URL <> Component
//路由對應表
const routes = [
    {path:"/", redirect: "/home"}, //重定向到 /home
    //http://localhost:5173/home  > HomeView
    {path: "/home", component: HomeView, name: "home"},
    //http://localhost:5173/about_ispan  > AboutView
    {path:"/about_ispan", component: AboutView, name: "about",
        redirect:"/about_ispan/team1", //重定向到 team1
        children:[
            //http://localhost:5173/about_ispan/team1 > Team1View 
            {path: "team1", component: Team1View, name: "team1"},
            //http://localhost:5173/about_ispan/team2 > Team2View 
            {path: "team2", component: Team2View, name: "team2"},
        ]
    },
    //http://localhost:5173/contact  > ContactView
    {path:"/contact/", component: ContactView, name: "contact",
     alias: "/contact_us", //別名
     sensitive: false, //大小寫敏感
     strict:false //嚴格模式
    },
    //http://localhost:5173/member  > MemberCenter
    {path:"/member/:id", component:MemberCenter, name:"member",props:true},
        //http://localhost:5173/todos  > TodosView_Full
    {path:"/todos", component:TodosView_Full, name:"todos"},
    //http://localhost:5173/tabs
    {path:'/tabs', component:TabsView, name:"tabs"},
    {path:'/:pathMatch(.*)*',component:NotFound, name:"notfound"},
      
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
});

export default router;
