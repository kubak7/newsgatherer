<template>
  <div class="root d-flex">
    <p>Component News</p>
    <ul id="example">
      <li v-for="item in info.articles" :key="item">
        <h1> {{ item.title }}</h1>
        <h2> {{ item.author }}</h2>
        <p> {{ item.description}}</p>
      </li>
    </ul>
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
      .then(response => this.info = response.data)
      .catch(error => {
        this.errorMessage("There was en error!", error);
      });
  }



}





</script>

<style scoped>

</style>
