<template>
  <div class="plaćanjegot">
    <h1 style="padding: 20px; color: #2c3e50">Plaćanje gotovinom:</h1>
    <form @submit.prevent="spremiBazaGot" class="form-group col-md-4" style="display: inline-block;">

      <div class="form-group">
        <!-- <label for="exampleInputName">Adrese naših poslovnica:</label> -->
        <h3>Adrese naših poslovnica:</h3>
        <p>Zumbulićeva 5b, Poreč</p>
        <p>Marsovo polje 20, Pula</p>
        <p>Trg Slobode, Pazin</p>
        <p>Gundulićeva 20, Rovinj</p>
        <input v-model="storePayment" type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Upišite adresu poslovnice u kojoj želite platit">
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
        <router-link to="/plaćanje">
          <button type="file" class="btn btn-primary">Natrag</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { Placanje_Novac } from '@/services';

export default {
  data() {
    return {
      storePayment: '',
      //date: '',
      //companyName: '',
    };
  },
  methods: {
    async spremiBazaGot() { 
      let success4 = await Placanje_Novac.spremiBazaGot(this.storePayment/*, this.date, this.companyName*/);
      console.log('Rezultat prihvata plaćanja ', success4);

      if (success4 == true){ 
        this.$router.push({ name: 'Plaćanje gotovina confirm' });  
      }  
    },
  },
};
</script>