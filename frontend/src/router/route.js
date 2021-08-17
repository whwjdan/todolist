import Vue from 'vue'
import VueRouter from "vue-router";
import Simple from "../components/Simple";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/simple',
        },
        {
            path: '/simple',
            component: Simple
        },
    ]
})

export default router