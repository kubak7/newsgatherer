import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import axios from 'vue-axios';
import VueAxios from 'vue-axios';
import firebase from 'firebase';
import Login from "@/views/Login";

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import('../views/Register.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});

export default router;
