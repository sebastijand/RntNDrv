<template>
  <div class="plaćanjekred">
    <h1 style="padding: 20px; color: #2c3e50">Plaćanje kreditnom karticom:</h1>
    <form @submit.prevent="spremiBazaKred" class="form-group col-md-4" style="display: inline-block;">
      <div class="form-group">
        <label for="exampleInputNumber">Broj karitce:</label>
        <input v-model="cardNumber" type="text" class="form-control" id="exampleInputNumber" aria-describedby="cardHelp" placeholder="Enter card number">
      </div>

      <!--
      <div class="form-group">
        <label for="exampleInputEmail1">Enter your email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      -->
        
      <div class="form-group">
        <label for="exampleInputDate">Datum isteka:</label>
        <input v-model="date" type="date" class="form-control" id="exampleInputDate" placeholder="Date">
      </div>
        
      <div class="form-group">
        <label for="exampleInputCompany">Ime kompanije:</label>
        <input v-model="companyName" type="text" class="form-control" id="exampleInputCompany" placeholder="Kompanija">
      </div>

      <!--
      <div class="form-group">
        <label for="exampleInputName">Ime:</label>
        <input type="text" class="form-control" id="exampleInputName" placeholder="Ime">
      </div>
        
      <div class="form-group">
        <label for="exampleInputSurname">Prezime:</label>
        <input type="text" class="form-control" id="exampleInputSurname" placeholder="Prezime">
      </div>
        
      <div class="form-group">
        <label for="exampleInputAdress">Adresa:</label>
        <input type="text" class="form-control" id="exampleInputAdress" placeholder="Adresa">
      </div>
        
      <div class="form-group">
        <label for="exampleInputCity">Grad:</label>
        <input type="text" class="form-control" id="exampleInputCity" placeholder="Grad">
      </div>
      -->
        
      <div>
        <!--
        ZBOG OVOG RUTERA NIJE RADILO UPIS PODATAKA NA MONGODB BAZU
        <router-link to="/plaćanje" style="margin-right: 15px"> 
        <button type="submit" class="btn btn-primary">Natrag</button> 
        </router-link>
        -->

        <!-- <router-link to="/finalnapotvrda" style="margin-right: 15px"> -->
        <button type="submit" class="btn btn-primary">Prihvati</button>  <!-- OVDJE DOLAZI POP-UP PROZOR!!! -->
        <!-- </router-link> -->
      </div>
    </form>
  </div>
</template>

<script>
import { Placanje } from '@/services';

export default {
  data() {
    return {
      cardNumber: '',
      date: '',
      companyName: '',
    };
  },
  methods: {
    async spremiBazaKred() { 
      let success3 = await Placanje.spremiBazaKred(this.cardNumber, this.date, this.companyName);
      console.log('Rezultat prijave ', success3);

      if (success3 == true){
        this.$router.push({ name: 'Finalna potvrda' });  
      }  
    },
  },
};
</script>