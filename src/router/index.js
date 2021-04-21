import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/Register';
import Login from '@/views/Login';
import Home from '../views/Home';
import Main from '../views/Main';
import Favourites from '../views/Favourites';
import axios from 'vue-axios';
import VueAxios from 'vue-axios';
import firebase from 'firebase';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        meta: {
            authRequired: true,
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/favourite',
        name: 'Favourites',
        component: Favourites,
        meta: {
            authRequired: true,
        },
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
