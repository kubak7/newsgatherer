<template>
  <v-content>
    <v-flex d-flex>
      <v-layout wrap>
        <v-card v-for="(fav, index) in fav" v-bind:key="fav.id" class="mx-auto my-12 pa-2" max-width="374">
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>
          <v-img v-bind:src="fav.urlToImg"></v-img>
          <v-card-title> {{ fav.title }}</v-card-title>
          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
            </v-row>
            <br>
            <div> {{ fav.description }}</div>
            <div> {{ fav.author }}</div>
          </v-card-text>
          <a v-bind:href="fav.url">
            <v-btn
                color="deep-purple lighten-2"
                text
            >
              Zobacz
            </v-btn>
          </a>
          <v-btn @click="deleteFromDB(index)"
                 depressed
                 elevation="2"
                 fab
                 icon
                 raised
                 rounded
                 right

          ><v-icon>mdi-delete</v-icon></v-btn>


        </v-card>
      </v-layout>
    </v-flex>

  </v-content>
</template>

<script>
import db from '../components/FirebaseInit';
import firebase from "firebase";
export default {
    name: 'Favourites',
  data() {
    return {
      email:null,
      user_id:null,
      fav:[],
    }
  },
  created() {
    const user = firebase.auth().currentUser;

    if(user){
      this.email=user.email;

      db.collection('Users').where('email','==',this.email).get().then((snaphot) => {
        snaphot.forEach(doc =>{
          this.user_id = doc.id;
          console.log(this.user_id);
        })
      })
      console.log(this.user_id);
    }
    console.log(this.user_id);
    db.collection('Users').doc(this.user_id).collection('Favourites').get().then(querySnapshot =>{
      querySnapshot.forEach(doc =>{
        const data = {
          'id':doc.data().id,
          'title':doc.data().title,
          'description':doc.data().description,
          'urlToImg':doc.data().urlToImg,
          'url':doc.data().url,
        }
        this.fav.push(data)

      })
    })
  },
  methods:{
    deleteFromDB(i){
      if(confirm('Are you sure?')){
        //db.collection('Favourites').where('id','==',this.fav[i].id).delete();

        const ref = db.collection('Users')
            .doc(this.user_id).collection('Favourites')
            .where('id','==',this.fav[i].id);

        ref.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            doc.ref.delete();
          });
        });
      }

    },


    }

};
</script>

<style scoped>

</style>
