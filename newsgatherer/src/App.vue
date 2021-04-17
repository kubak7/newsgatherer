<template>
  <router-view />
</template>

<script>
import {onBeforeMount} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import firebase from 'firebase';
export default {
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          router.replace('/login');
        }
        else if (route.path === "/login" || route.path === "/register") {
          router.replace('/');
        }
      });
    });
  }
}
</script>

<style lang="scss">
body {
  background: grey;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;

  a {
    color: inherit;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
