<template>
  <div class='app'>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
            v-for="n in 3"
            :key="n"
            cols="12"
            sm="4"
        >
          <v-card v-for="item in info.articles" :key="item" class="mx-auto my-12 pa-2" max-width="374">
            <template slot="progress">
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>
            <v-img v-bind:src="item.urlToImage"></v-img>
            <v-card-title> {{ item.title }}</v-card-title>
            <v-card-text>
              <v-row
                  align="center"
                  class="mx-0"
              >
              </v-row>
              <br>
              <div> {{ item.description }}</div>
            </v-card-text>
            <a v-bind="item.url">
              <v-btn
                  color="deep-purple lighten-2"
                  text
              >
                Zobacz
              </v-btn>
            </a>


          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//import axios from 'axios';
import '../assets/css/głowna-zalogowane.css';

export default {
    name: 'News',
    data() {
        return {
            info: null,
            titles: [],
            descriptions: [],
            authors: [],
            sourceUrls: [],
            imageUrls: [],

        };
    },
    created() {
        var infoTitles = [];
        var infoDescriptions = [];
        var infoAuthors = [];
        var infoUrls = [];
        var infoImageUrl = [];

        const url = 'https://newsapi.org/v2/top-headlines?country=pl' +
            '&apiKey=15df16e7b6ef4578afc917f47115ab6f';


        fetch(url)
            .then((response) => response.json())
            .then((data) => {

                this.info = data;
                for (const val of data.articles) {
                    infoTitles.push(val.title);
                    infoDescriptions.push(val.description);
                    infoAuthors.push(val.author);
                    infoUrls.push(val.url);
                    infoImageUrl.push(val.urlToImage);
                }
                this.titles = infoTitles;
                this.descriptions = infoDescriptions;
                this.authors = infoAuthors;
                this.sourceUrls = infoUrls;
                this.imageUrls = infoImageUrl;

            });
        //axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=15df16e7b6ef4578afc917f47115ab6f')
        //    .then(response => this.info = response.data)
        //    .catch(error => {
        //      this.errorMessage("There was en error!", error);
        //    });
    },


};


</script>

