<template>
  <div class="uređivanjeprofila">
    <h4 style="float: left; margin: 20px">Uređivanje profila:</h4>
    <form class="form-group col-md-7" style="display: inline-block;">
    <div>
      <form @submit.prevent="update">
        <!--
        <div class="col-md-6" style="margin: 10px">
          <p><b>Ime:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your name">
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Prezime:</b></p>
          <input v-model="displaySurname" type="text" class="form-control" id="bio" placeholder="Enter your surname">
        </div>-->
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Adresa:</b></p>
          <input v-model="adress" type="text" class="form-control" id="bio" placeholder="Enter your adress">
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Grad:</b></p>
          <input v-model="city" type="text" class="form-control" id="bio" placeholder="Enter your city">
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Osiguranje:</b></p>
          <input v-model="insurance" type="text" class="form-control" id="bio" placeholder="Enter your insurance">
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Vozačka dozvola:</b></p>
          <input v-model="category" type="text" class="form-control" id="bio" placeholder="Enter your license">
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Kontakt telefon:</b></p>
          <input v-model="telephone" type="text" class="form-control" id="bio" placeholder="Enter your phone number">
        </div>
        <!--
        <div class="col-md-6" style="margin: 10px">
          <p><b>Kontakt e-mail:</b></p>
          <input v-model="userEmail" type="email" class="form-control" id="bio" placeholder="Enter your e-mail">
        </div> -->
        <button type="submit" class="btn btn-primary" style="float: left">Primjeni</button>
        <!--
        <router-link to="/profilkorisnika" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5">Primjeni</button>
        </router-link>-->
      </form>
    </div>
    </form>
  </div>
</template>


<script>
import { Auth } from '@/services';

export default {
  data() {
    return {
      adress: '',
      city: '',
      insurance: '',
      category: '',
      telephone: ''
    };
  },
  methods: {
    async update() { 
      let success = await Auth.update(/*this.id*/this.adress, this.city, this.insurance, this.category, this.telephone);
      console.log('Rezultat prijave ', success);

      if (success == true){ 
        this.$router.push({ name: 'Profil Korisnika' });  
      }  
    },
  },
};
</script>