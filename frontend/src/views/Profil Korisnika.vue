<template>
  <div class="profilkorisnika">
    <h4 style="float: left; margin: 50px">Informacije o korisniku:</h4>
    <div style="float: left; margin: 125px;">
        <p><b>Ime:  {{ displayName }} </b></p>
        <p><b>Prezime:  {{ displaySurname }} </b></p>
        <p><b>Adresa:  {{ displayAdress }} </b></p>
        <p><b>Grad:  {{ displayCity }} </b></p>
        <p><b>Osiguranje:   {{ userInsurance }} </b></p>
        <p><b>Vozačka dozvola:  {{ userCategory }} </b></p>
        <p><b>Kontakt telefon:  {{ displayTel }} </b></p>
        <p><b>Kontakt e-mail:  {{ userEmail }} </b></p>
        
        <router-link to="/status">
          <button type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Status</button>
        </router-link>
        
        <router-link to="/uređivanjeprofila" style="margin-right: 15px">
          <button type="file" class="btn btn-primary mt-5">Uredi</button>
        </router-link>
    </div>
        <!-- FIREBASE INFORMACIJE O KORISNIKU -->
    <div>
    </div>
    <!--
    <div>

        <router-link to="/status">
          <button type="file" class="btn btn-primary mt-5">Status</button>
        </router-link>
        <br>
        <router-link to="/uređivanjeprofila">
          <button type="file" class="btn btn-primary mt-5">Uredi</button>
        </router-link>
    </div>
    -->
  </div>
</template>



<!--      UPDATED FIREBASE      -->

<script type="text/javascript">
import store from '@/store.js'
export default {
  data () {
    return store;
  },
  
  mounted () { 
      
    //    TRENUTNO NE RADI JER TREBA SPOJIT PODATKE U DATABASE (POGLEDAJ "Signup".vue)  

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
      email = user.userEmail;



      //bio = user.newBio;
      //location = user.newLocation;
      //picture = user.imageData;
    }
  }
}
</script>

<!--
<style scoped>
.btn {
  display: table-cell;
  vertical-align: bottom;
}
</style>