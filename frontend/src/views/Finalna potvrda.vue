<template>
  <div class="finalnapotvrda">
    <h1 style="padding: 20px; color: #2c3e50">FINALNA POTVRDA:</h1>
    <div>
        <h6><b>Osobne informacije:</b></h6>
        <p>Ime:  {{ displayName }} </p>
        <p>Prezime:  {{ displaySurname }} </p>
        <p>Adresa:  {{ displayAdress }} </p>
        <!-- <p><b>Grad:  {{ displayCity }} </b></p> -->
        <p>Osiguranje:   {{ userInsurance }} </p>
        <!-- <p><b>Vozačka dozvola:  {{ userCategory }} </b></p> -->
        <p>Kontakt telefon:  {{ displayTel }} </p>
        <p>Kontakt e-mail:  {{ userEmail }} </p>
    </div>

    <div>
        <h6><b>Odabrani model vozila:</b></h6>
        <p>Marka:  </p>
        <p>Model:  </p>
        <p>Klasa:  </p>
        <p>Registracija:  </p>
    </div>
    
    <div>
        <h6><b>Odabrani termin:</b></h6>
        <p>Od:  </p>
        <p>Do:  </p>
    </div>
    
    <div>
        <h6><b>Plaćanje:</b></h6>
        <p>Način Plaćanja:  </p>
        <p>Ime kompanije (kred):  </p>
        <p>Mjesto poslovnice (gotovina):  </p>
    </div>

    <router-link to="/izbornik">
      <button type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Odustani</button>
    </router-link>
        
    <!--          POPUP-PROZOR          -->

    <router-link to="/status" style="margin-right: 15px">
      <button type="file" class="btn btn-primary mt-5">Prihvati</button>
    </router-link>

    <!--                                -->


    <!-- 
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
  </div>
</template>

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
      //city = user.displayCity
      insurance = user.userInsurance
      //category = user.userCategory
      telephone = user.displayTel
      email = user.userEmail;



      //bio = user.newBio;
      //location = user.newLocation;
      //picture = user.imageData;
    }
  }
}
</script>

