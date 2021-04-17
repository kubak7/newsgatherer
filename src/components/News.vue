<template>
  <div class="root d-flex">
    <p>Component News</p>
    <div class="totalResults">{{ info }}</div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: "News",
  data() {
    return {
      info: null,
    }
  },
  created(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=15df16e7b6ef4578afc917f47115ab6f')
      .then(response => this.info = response)
      .catch(error => {
        this.errorMessage("There was en error!", error);
      });
  }



}





</script>

<style scoped>

</style>
