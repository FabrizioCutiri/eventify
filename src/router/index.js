import HomeComponent from '../public/pages/home.component.vue';
import {createRouter, createWebHistory} from "vue-router";

const PageNotFoundComponent = ()=>import('../public/pages/page-not-found.component.vue');

const routes = [
    {path: '/home', name:'home', component:HomeComponent, meta:{title:'Home'}},
    {path: '/', name:'default', redirect:'/home'},
    {path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFoundComponent, meta:{title:'Page Not Found'}}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;