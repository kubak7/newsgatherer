<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/nicepage.css'
import "./assets/js/nicepage.js";
import "./assets/js/jquery.js";

export default {
  name: 'App',
}
</script>


