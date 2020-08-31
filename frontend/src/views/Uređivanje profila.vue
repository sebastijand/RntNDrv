<template>
  <div class="uređivanjeprofila" style="padding: 20px">
    <h1>Uređivanje profila:</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="update">
            <p><b>Napomena!</b> Potrebno je upisati stare podatke na forme koje se ne mjenjaju</p>
            <div class="form-group">
              <p><b>Adresa:</b></p>
              <input v-model="adress" type="text" class="form-control" placeholder="Enter your adress">
            </div>
            <div class="form-group">
              <p><b>Grad:</b></p>
              <input v-model="city" type="text" class="form-control" placeholder="Enter your city">
            </div>
            <div class="form-group">
              <p><b>Osiguranje:</b></p>
              <input v-model="insurance" type="text" class="form-control" placeholder="Enter your insurance">
            </div>
            <div class="form-group">
              <p><b>Vozačka dozvola:</b></p>
              <input v-model="category" type="text" class="form-control" placeholder="Enter your license">
            </div>
            <div class="form-group">
              <p><b>Kontakt telefon:</b></p>
              <input v-model="telephone" type="text" class="form-control" placeholder="Enter your phone number">
            </div>
            <button type="submit" class="btn btn-primary mt-5" style="margin-right: 15px">Primjeni</button>
            <router-link to="/profilkorisnika" style="margin-right: 15px">
              <button type="file" class="btn btn-primary mt-5">Odustani</button>
            </router-link>
            </form>
          </div>
          <div class="col-sm"></div>
      </div>
    </div>
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
      let success = await Auth.update(this.username, this.adress, this.city, this.insurance, this.category, this.telephone);
      console.log('Rezultat prijave ', success);

      if (success == true){ 
        this.$router.push({ name: 'Profil Korisnika' });  
      }  
    },
  },
};
</script>