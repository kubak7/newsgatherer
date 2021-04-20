<template>
  <div class="root d-flex">
    <h1>Strona domowa</h1>
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
