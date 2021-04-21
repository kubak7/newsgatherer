<template>
    <div id='app'>
        <div id='nav'>
            <router-link to='/login'>Login</router-link>
            |
            <router-link to='/register'>Register</router-link>
            |
            <router-link to='/home'>Home</router-link>
            |
            <button class='u-btn u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-3-base u-btn-1'
                    type='submit' @click='logout'>Logout
            </button>
        </div>
        <router-view />
    </div>
</template>

<script>
import './assets/css/nicepage.css';
import firebase from 'firebase';

export default {
    name: 'App',
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert('Successfully logged out');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>
<style scoped>

</style>


