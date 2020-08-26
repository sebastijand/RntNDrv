<template>

  
  <div class="card text-center w-20" style="width: 27.5em; margin:0 auto;">
    <div class="card-header ">
      <strong>FINALNA POTVRDA:</strong>
    </div>
    <div class="card-body">
      <span v-if="auth.authenticated">
        <h6><b>Osobne informacije:</b></h6>
        <p>Kontakt e-mail: {{ auth.userEmail }}</p>
        <!--<p>Ime:  {{ auth.displayName }} </p>
        <p>Prezime:  {{ auth.displaySurname }} </p>-->
        <p>Adresa: {{ auth.displayAdress }} </p>
        <!-- OVDJE IDE KOMENTAR -> <p><b>Grad: {{ displayCity }} </b></p> -->
        <p>Osiguranje: {{ auth.userInsurance }} </p>
        <p>Vozačka dozvola: {{ auth.userCategory }} </p>  
        <p>Kontakt telefon: {{ auth.displayTel }} </p>
      </span>
      <br>
      <h6><b>Odabrani model vozila:</b></h6>
      <p>Marka: {{ vehicle.carName }} </p>
      <p>Model: {{ vehicle.carModel }} </p> 
      <p>Klasa: {{ vehicle.carType }}  </p>
      <br>
      <h6><b>Odabrani termin:</b></h6>
      <p>Od: {{ trajanje.dateFrom }}</p>
      <p>Do: {{ trajanje.dateTo }} </p>
      <p>Lokacija: {{ trajanje.carSomething }}</p>
      <br>
      <h6><b>Plaćanje:</b></h6>
      <p>Način Plaćanja:  <!-- {{ idkkkkkkkkkkkkkkkkkkkkkkkkkkkpaymentType }} --></p>
      <p>Ime kompanije (kred): {{ payment.creditCardName }} </p>
      <p>Mjesto poslovnice (gotovina): {{ payment.paymentCashStore }} </p>
      <router-link to="/izbornik">
        <button @click="removeEverything" type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Odustani</button>
      </router-link>
      <router-link to="/status" style="margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Prihvati</button> <!-- OVDJE IDE KOMENTAR ->  PROVJERIT DA LI TREBA DOĆ SUBMIT UMISTO "FILE" -->
      </router-link>
    </div>
  </div>



  <!--
  <div class="finalnapotvrda">
    <h1 style="padding: 20px; color: #2c3e50">FINALNA POTVRDA:</h1>
    <div>
      <span v-if="auth.authenticated">
        <h6><b>Osobne informacije:</b></h6>
        <p>Ime:  {{ auth.displayName }} </p>
        <p>Prezime:  {{ displaySurname }} </p>
        <p>Adresa: {{ displayAdress }} </p>
         OVDJE IDE KOMENTAR -> <p><b>Grad: {{ displayCity }} </b></p> 
        <p>Osiguranje:  {{ userInsurance }} </p>
         OVDJE IDE KOMENTAR ->  <p><b>Vozačka dozvola: {{ userCategory }} </b></p>  
        <p>Kontakt telefon:  {{ displayTel }} </p>
        <p>Kontakt e-mail: {{ auth.userEmail }}</p>
      </span>
    </div>

    <div>
      <h6><b>Odabrani model vozila:</b></h6>
      <p>Marka: {{ vehicle.carName }} </p>
      <p>Model: {{ vehicle.carModel }} </p> 
      <p>Klasa: {{ vehicle.carType }}  </p>
       OVDJE IDE KOMENTAR ->  <p>Registracija:  {{ carModel }}</p> 
    </div>
    
    <div>
       <span v-if="trajanje.authenticatedAf">  
        <h6><b>Odabrani termin:</b></h6>
        <p>Od: {{ trajanje.dateFrom }}</p>
        <p>Do: {{ trajanje.dateTo }} </p>
        <p>Lokacija: {{ trajanje.carSomething }}</p>
       </span> 
    </div>
    
    <div>
      <h6><b>Plaćanje:</b></h6>
      <p>Način Plaćanja:   {{ idkkkkkkkkkkkkkkkkkkkkkkkkkkkpaymentType }} </p>
      <p>Ime kompanije (kred):   {{ payment.creditCardName }} </p>
      <p>Mjesto poslovnice (gotovina):   {{ payment.paymentCashStore }} </p>
    </div>

    <router-link to="/izbornik">
      <button type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Odustani</button>
    </router-link>
        

     OVDJE IDE KOMENTAR ->  <form @submit.prevent="accept">  
    <router-link to="/status" style="margin-right: 15px">
      <button type="file" class="btn btn-primary mt-5">Prihvati</button>  OVDJE IDE KOMENTAR ->  PROVJERIT DA LI TREBA DOĆ SUBMIT UMISTO "FILE" 
    </router-link>
     OVDJE IDE KOMENTAR ->  </form> 


  </div> 
  -->
</template>

<script type="text/javascript">
import store from '@/store.js'
//import FinalnaPotvrdaComponent from '@/components/FinalnaPotvrdaComponent.vue';
import { Auth, Trajanje_Najama, Vozilo, Placanje, Ugovor } from '@/services';

export default {
  data () {
    return {
      ...store,
      auth: Auth.state,
      trajanje: Trajanje_Najama.state2,
      vehicle: Vozilo.stateVozilo,
      payment: Placanje.statePlaćanje

      //trajanje : Trajanje_Najama.getNajam(this.id)
    }
  },
  methods: {
    removeEverything() {
      Ugovor.removeEverything();
    }
  },
  /*components: {
    FinalnaPotvrdaComponent
  }*/
  /*methods: {
    async refresh() {
      let post = await Trajanje_Najama.getNajam();
    },
  }*/
  /*

  methods: {
    accetp () {
      // DOLAZI KOD KOJI SPREMA PODATKE NA MONGODB BAZU
    }
  }

  props: ['id'],
    data() {
        return {
            card: null
        };
    },
    async mounted() {
        this.card = await .getOne(this.);
    },
    name: 'post-detail',
    components: {
        InstagramCard
    }
  };
  */
}
</script>

