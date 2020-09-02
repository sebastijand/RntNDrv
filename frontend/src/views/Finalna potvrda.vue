<template>
  <div class="card text-center w-20" style="width: 30.5em; margin:10px auto;">
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
      <!-- <p>Način Plaćanja:  {{ idkkkkkkkkkkkkkkkkkkkkkkkkkkkpaymentType }} </p>-->
      <p>Datum isteka (kred): {{ paymentCred.creditCardExp }} </p>
      <p>Ime kompanije (kred): {{ paymentCred.creditCardName }} </p>
      <p>Mjesto poslovnice (gotovina): {{ paymentNovac.paymentCashStore }} </p>
      <router-link to="/izbornik">
        <button @click="removeEverything" type="file" class="btn btn-primary mt-5" style="margin-right: 15px">Odustani</button>
      </router-link>
      <router-link to="/status" style="margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Prihvati</button> <!-- OVDJE IDE KOMENTAR ->  PROVJERIT DA LI TREBA DOĆ SUBMIT UMISTO "FILE" -->
      </router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
import { Auth, Trajanje_Najama, Vozilo, Placanje, Ugovor, Placanje_Novac } from '@/services';

export default {
  data () {
    return {
      ...store,
      auth: Auth.state,
      trajanje: Trajanje_Najama.state2,
      vehicle: Vozilo.stateVozilo,
      paymentCred: Placanje.statePlaćanje,
      paymentNovac: Placanje_Novac.statePlaćanjeNovac
    }
  },
  methods: {
    removeEverything() {
      Ugovor.removeEverything();
    }
  },
}
</script>

