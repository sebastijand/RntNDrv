<template>
  <div class="status">
    <h1 style="padding: 20px; color: #2c3e50">Status iznajmljivanja:</h1>
    <div style="float: left; margin: 10px">
      <!-- <img src="škoda logo.png" style="width: 250px; height: 250px;"> -->
      <img :src="vehicle.carLogo" style="width: 250px; height: 250px;" alt="Vozilo još nije odabrano"> 
      <!-- <h1>{{ carName }} {{ carModel }}</h1> -->
      <h1>{{ vehicle.carName }} {{ vehicle.carModel }}</h1> 
      <router-link to="/profilkorisnika" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Natrag na profil</button>
      </router-link>
    </div>
    
    <div class="info" style="float: left; margin: 10px">
      <h2>Cijena: {{ vehicle.carPrice }}</h2>
      <h2>Početak najma: {{ trajanje.dateFrom }}</h2>
      <h2> Način plaćanja: {{ payment.creditCardName }} </h2> <!-- NOT WORKING YET!!! -->


      <!-- <h2>Lokacija prihvaćanja vozila: {{ }}</h2> -->
      <h2>Završetak najma: {{ trajanje.dateTo }}</h2>
      <!-- <h2>Datum stvaranja ugovora: {{ datumStvaranja }} </h2> -->
      <!-- <h2>Stanje najma: u tijeku / gotov </h2> -->     
    </div>
  
  </div>
</template>


<script type="text/javascript">
import store from '@/store.js'
//import FinalnaPotvrdaComponent from '@/components/FinalnaPotvrdaComponent.vue';
import { /*Auth, */Trajanje_Najama, Vozilo, Placanje, /*Ugovor*/ } from '@/services';

export default {
  data () {
    return {
      ...store,
      //auth: Auth.state,
      trajanje: Trajanje_Najama.state2,
      vehicle: Vozilo.stateVozilo,
      payment: Placanje.statePlaćanje

      //trajanje : Trajanje_Najama.getNajam(this.id)
    }
  },
  //methods: {
  //  removeEverything() {
  //    Ugovor.removeEverything();
  //  }
  //},
}
</script>


<style scoped>
  .info {
    margin: auto;
    width: 60%;
    padding: 10px;
  }
</style>