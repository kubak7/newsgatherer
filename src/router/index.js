import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Register from '../views/Register';
import Login from '../views/Login';
import Favourites from '../views/Favourites';
import Profil from '../views/Profil';
import axios from 'vue-axios';
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/profil',
        name: 'Profil',
        component: Profil,
    },
    {
        path: '/fav-list',
        name: 'Favourites',
        component: Favourites,
    },


];

const router = new VueRouter({
    routes,
});

export default router;
