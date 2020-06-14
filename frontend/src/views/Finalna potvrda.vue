<template>
  <div class="finalnapotvrda">
    <h1 style="padding: 20px; color: #2c3e50">FINALNA POTVRDA:</h1>
    <div>
      <span v-if="auth.authenticated">
        <h6><b>Osobne informacije:</b></h6>
        <p>Ime: {{ auth.displayName }}</p>
        <p>Prezime: {{ displaySurname }}</p>
        <p>Adresa: {{ displayAdress }}</p>
        <!-- <p><b>Grad: {{ displayCity }} </b></p> -->
        <p>Osiguranje: {{ userInsurance }}</p>
        <!-- <p><b>Vozačka dozvola: {{ userCategory }} </b></p> -->
        <p>Kontakt telefon: {{ displayTel }}</p>
        <p>Kontakt e-mail: {{ auth.userEmail }}</p>
      </span>
    </div>

    <div>
      <h6><b>Odabrani model vozila:</b></h6>
      <p>Marka: {{ carName }}</p>
      <p>Model: {{ carModel }}</p> 
      <p>Klasa: {{ carType }}</p>
      <!-- <p>Registracija:  {{ carModel }}</p> -->
    </div>
    
    <div>
      <h6><b>Odabrani termin:</b></h6>
      <p>Od: {{ dateFrom }}</p>
      <p>Do: {{ dateTo }} </p>
    </div>
    
    <div>
      <h6><b>Plaćanje:</b></h6>
      <p>Način Plaćanja:  {{ paymentType }}</p>
      <p>Ime kompanije (kred):  {{ creditCardName }}</p>
      <p>Mjesto poslovnice (gotovina):  {{ paymentCashStore }}</p>
    </div>

    <router-link to="/izbornik">
      <button type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Odustani</button>
    </router-link>
        

    <!-- <form @submit.prevent="accetp"> -->
    <router-link to="/status" style="margin-right: 15px">
      <button type="file" class="btn btn-primary mt-5">Prihvati</button> <!-- PROVJERIT DA LI TREBA DOĆ SUBMIT UMISTO "FILE" -->
    </router-link>
    <!-- </form> -->


  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
import { Auth } from '@/services';
export default {
  data () {
    return {
      ...store,
      auth: Auth.state,
    }
  },
  /*

  methods: {
    accetp () {
      UNUTRA UPISAT KOD KOJI SPREMA PODATKE NA MONGODB BAZU!!!
    }
  }

  OVAJ DIO PROVJERIT SUTRA!!!
  props: ['id'],
    data() {
        return {
            card: null
        };
    },
    async mounted() {
        this.card = await Posts.getOne(this.oib);
    },
    name: 'post-detail',
    components: {
        InstagramCard
    }
  };
  */
}
</script>

