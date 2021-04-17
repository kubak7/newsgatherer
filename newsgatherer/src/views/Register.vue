<template>
<div class="Register">
  <h1>Register</h1>
  <form @submit.prevent = "Register">
    <label>
      <input type="text" placeholder="Email" v-model="email"/>
    </label>
    <label>
      <input type="password" placeholder="Password" v-model="password"/>
    </label>
    <input type="submit" value="Register"/>
    <p>Have an account? <router-link to="/login">Login Here</router-link></p>
  </form>
</div>
</template>

<script>
import firebase from 'firebase';
import {ref} from 'vue'
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => alert(user))
        .catch(err => alert(err.message));
    }

    return {
      Register,
      email,
      password
    }
  }
}
</script>
