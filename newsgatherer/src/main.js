import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhtXyOlmBJgZkkcIddI1GnPYKKI3K0rVE",
    authDomain: "newsfeedauth.firebaseapp.com",
    projectId: "newsfeedauth",
    storageBucket: "newsfeedauth.appspot.com",
    messagingSenderId: "677349428542",
    appId: "1:677349428542:web:f11b22b395694a7e34306f",
    measurementId: "G-CDYXY1SRYX"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
