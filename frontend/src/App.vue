<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" style="float: left">Home</router-link> |
      <!-- <router-link to="/login">Login</router-link> -->
      <!--  <router-link to="/signup">Signup</router-link> -->
      <!-- <router-link to="/izbornik">Izbornik</router-link> -->
      <!--
      <router-link to="/profilkorisnika">Profil Korisnika</router-link>    
      <router-link to="/uređivanjeprofila">Uređivanje profila</router-link>
      <router-link to="/klasa">Klasa vozila</router-link>
      <router-link to="/status">Status iznajmljivanja</router-link>
      <router-link to="/model">Model vozila</router-link>
      <router-link to="/informacijevozilo">Informacije vozila</router-link>
      <router-link to="/odabirtermina">Odabir termina</router-link>
      <router-link to="/plaćanje">Plaćanje</router-link>
      <router-link to="/plaćanjekred">Plaćanje Kreditna</router-link>
      <router-link to="/plaćanjegot">Plaćanje gotovina</router-link>
      <router-link to="/finalnapotvrda">Status iznajljivanja</router-link>
      -->
    </div>
    <router-view/>
  </div>
</template>


<script type="text/javascript">
import store from '@/store.js'
export default {
  data () {
    return store;
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User is logged in with email " + user.email)
        /*this.authenticated = true
        this.userEmail = user.email
        db.collection("users")
          .doc(this.userEmail)
          .get()
          .then(doc => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              this.displayName = doc.data().displayName;
              //this.displaySurname = doc.data().displaySurname;
              //this.displayAdress = doc.data().displayAdress;
              //this.displayCity = doc.data().displayCity;
              //this.userInsurance = doc.data().userInsurance;
              //this.userCategory = doc.data().userCategory;
              //this.displayTel = doc.data().displayTel;



              //this.newBio = doc.data().newBio;
              //this.newLocation = doc.data().newLocation;
            } else {
              // doc.data() will be undefined in this case
              console.log("No document!");
            }
          });*/
        if (this.$route.name !== 'Home'){
          this.$router.push({name: 'Home'}).catch(err => console.log(err))
        }
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'Login')
          this.$router.push({name: 'Login'}).catch(err => console.log(err))
      } 
    })
    /*
    
    OVO NAJVJEROJATNIJE POBRISAT

    db.collection(profilebio).orderBy("posted_at").limit(10)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          const data = change.doc.data()
          if (change.type !== "added") {
            return
          }
          const newBio = {
            id: change.doc.id, 
            url: data.url, 
            email: data.email, 
            bio: data.bio,
            title: 'Some title', 
            posted_at: data.posted_at, 
            //comments: data.comments -> jedino originalno komentirano
          };
          this.cards.unshift(newBio)
        });
    });*/
  }
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 // padding: 10px;
  background-color: #2c3e50;
  font-size: 15px;
  /*color: white;*/

  padding: 30px;
  a {
    padding: 13px;
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      //padding: 13px;
      background-color: rgb(255, 255, 255);
      color: #000000;
    }
  }
/*
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }*/
}
</style>
