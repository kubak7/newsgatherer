<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent = "Login">
      <label>
        <input type="text" placeholder="Email" v-model="email"/>
      </label>
      <label>
        <input type="password" placeholder="Password" v-model="password"/>
      </label>
      <input type="submit" value="Login"/>
      <p>Need an account? <router-link to="/register">Register Here</router-link></p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';


export default {
  name: "GoogleLogin",

  created(){
    const email = "";
    const password = "";
    const Login = () => {
      firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(data => console.log(data))
          .catch(err => alert(err.message));
    }
    return {
      Login,
      email,
      password
    }
  }
}
</script>

<style scoped>

</style>
