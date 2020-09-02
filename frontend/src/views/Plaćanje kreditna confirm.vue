<template>
  <div class="plaćanjekred">
    <h1 style="padding: 20px; color: #2c3e50">Plaćanje kreditnom karticom:</h1>
    <p><b>Molimo vas da ponovno upišete iste podatke</b></p>
    <form @submit.prevent="confirmCredit" class="form-group col-md-4" style="display: inline-block;">
      <!--<div class="form-group">
        <label for="exampleInputNumber">Broj karitce:</label>
        <input v-model="cardNumber" type="text" class="form-control" id="exampleInputNumber" aria-describedby="cardHelp" placeholder="Enter card number">
      </div> -->

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
        <button type="submit" class="btn btn-primary">Prihvati</button>  <!-- OVDJE DOLAZI POP-UP PROZOR!!! -->
        <router-link to="/plaćanjekred">
          <button @click="removeCred" type="file" class="btn btn-primary">Natrag</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { Placanje, Ugovor } from '@/services';

export default {
  data() {
    return {
      date: '',
      companyName: '',
    };
  },
  methods: {
    async confirmCredit() { 
      let success8 = await Placanje.confirmCredit(this.date, this.companyName);
      console.log('Rezultat prijave ', success8);

      if (success8 == true){
        this.$router.push({ name: 'Finalna potvrda' });  
      }  
    },
    removeCred(){
      Ugovor.removeCred();
    },
  },
};
</script>