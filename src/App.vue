<template>
  <v-app>
    <v-app-bar app color="primary" dark>
         <v-btn to="/login">Login</v-btn>
         <v-btn to="/register">Register</v-btn>
         <v-btn to="/home">Home</v-btn>
         <v-btn type="submit" @click="logout">Logout</v-btn>
    </v-app-bar>
    <br>
    <br>
    <br>
    <br>
    <router-view></router-view>
  </v-app>

</template>

<script>


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

<style>

</style>
