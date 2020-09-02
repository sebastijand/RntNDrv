<template>

  <div class="card text-center w-20" style="width: 32.5em; margin:10px auto;">
    <div class="card-header ">
      <b>Informacije o korisniku:</b>
    </div>
    <div style="float: left; margin: 35px;">
      <span v-if="auth.authenticated">
        <p><b>Adresa:</b>  {{ auth.displayAdress }} </p>
        <p><b>Grad:</b>  {{ auth.displayCity }} </p>
        <p><b>Osiguranje:</b>   {{ auth.userInsurance }} </p>
        <p><b>Vozačka dozvola:</b>  {{ auth.userCategory }} </p>
        <p><b>Kontakt telefon:</b>  {{ auth.displayTel }} </p>
        <p><b>Kontakt e-mail:</b>  {{ auth.userEmail }} </p>
        <router-link to="/promjena">
          <button type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Promjeni lozinku</button>
        </router-link>
      </span>
      <router-link to="/status">
        <button type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Status najma</button>
      </router-link>
        
      <router-link to="/uređivanjeprofila" style="margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Uredi podatke</button>
      </router-link>
    </div>
  </div>
</template>


<script type="text/javascript">
//import store from '@/store.js'
import { Auth } from '@/services'

export default {
  data () {
    //return store;
    
    return {
      //...store,
      auth: Auth.state,
    }
  },
}
</script>