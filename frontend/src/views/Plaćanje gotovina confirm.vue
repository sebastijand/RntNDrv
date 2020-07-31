<template>
  <div class="plaćanjegot">
    <h1 style="padding: 20px; color: #2c3e50">Plaćanje gotovinom:</h1>
    <form @submit.prevent="confirmCash" class="form-group col-md-4" style="display: inline-block;">

      <div class="form-group">
        <label for="exampleInputName">Mjesto Poslovnice:</label>
        <input v-model="storePayment" type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Ime">
      </div>
        
      <!-- 
      <div class="form-group">
        <label for="exampleInputName">Ime:</label>
        <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Ime">
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

      <p><strong>Plaćanje se odvija u poslovnici na dan početka najma</strong></p>
      <div>
        <!--
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
      storePayment: '',
      //date: '',
      //companyName: '',
    };
  },
  methods: {
    async confirmCash() { 
      let success4 = await Placanje.confirmCash(this.storePayment/*, this.date, this.companyName*/);
      console.log('Rezultat prihvata plaćanja ', success4);

      if (success4 == true){ 
        this.$router.push({ name: 'Finalna potvrda' });  
      }  
    },
  },
};
</script>