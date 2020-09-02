<template>
  <div class="plaćanjegot">
    <h1 style="padding: 20px; color: #2c3e50">Verificiranje:</h1>
    <p><b>Molimo vas da ponovno upišete iste podatke</b></p>
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

      <p><strong>Plaćanje se odvija u poslovnici zadnjeg dana najma</strong></p>
      <div>
        <button type="submit" class="btn btn-primary">Prihvati</button>  <!-- OVDJE DOLAZI POP-UP PROZOR!!! -->
        <router-link to="/plaćanjegot">
          <button @click="removeCash" type="file" class="btn btn-primary">Natrag</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { Placanje_Novac, Ugovor } from '@/services';

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
      let success4 = await Placanje_Novac.confirmCash(this.storePayment/*, this.date, this.companyName*/);
      console.log('Rezultat prihvata plaćanja ', success4);

      if (success4 == true){ 
        this.$router.push({ name: 'Finalna potvrda' });  
      }  
    },
    removeCash(){
      Ugovor.removeCash();
    },
  },
};
</script>