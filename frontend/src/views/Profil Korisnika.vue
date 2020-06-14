<template>
  <div class="profilkorisnika">
    <h4 style="float: left; margin: 50px">Informacije o korisniku:</h4>
    <div style="float: left; margin: 125px;">
      <span v-if="auth.authenticated">
        <p><b>Ime:  {{ auth.displayName }} </b></p>
        <p><b>Prezime:  {{ /*auth.*/displaySurname }} </b></p>
        <p><b>Adresa:  {{ /*auth.*/displayAdress }} </b></p>
        <p><b>Grad:  {{ /*auth.*/displayCity }} </b></p>
        <p><b>Osiguranje:   {{ /*auth.*/userInsurance }} </b></p>
        <p><b>Vozačka dozvola:  {{/* auth.*/userCategory }} </b></p>
        <p><b>Kontakt telefon:  {{ /*auth.*/displayTel }} </b></p>
        <p><b>Kontakt e-mail:  {{ auth.userEmail }} </b></p>
      </span>
      <router-link to="/status">
        <button type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Status najma</button>
      </router-link>
        
      <router-link to="/uređivanjeprofila" style="margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Uredi</button>
      </router-link>
    </div>
  </div>
</template>


<script type="text/javascript">
import store from '@/store.js'
import { Auth } from '@/services'

export default {
  data () {
    //return store;
    
    return {
      ...store,
      auth: Auth.state,
    }
    
  },
  /*
  mounted () {     
    var user = firebase.auth().currentUser;
    var email, bio, location, username, picture;     
    if (user != null) {
      username = user.displayName;
      usersurname = user.displaySurname;
      adress = user.displayAdress
      city = user.displayCity
      insurance = user.userInsurance
      category = user.userCategory
      telephone = user.displayTel
      //email = user.userEmail;
    }
  }*/
}
</script>

<!--
<style scoped>
.btn {
  display: table-cell;
  vertical-align: bottom;
}
</style>
-->