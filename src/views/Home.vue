<template>
  <div class="root d-flex">
    <router-link to="/">Home</router-link>|
    <router-link to="/profil">Profil</router-link>|
    <News></News>
  </div>
</template>

<script>
import News from "@/components/News";
export default {
  name: "Home",
  components: {News}
}
</script>

<style scoped>

</style>
