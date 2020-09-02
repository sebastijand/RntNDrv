<template>
  <div class="login" style="padding: 20px">
    <h1>Verifikacija / Login</h1>
    <p><b>Zbog veće sigurnosti, potrebno je ponovno upisati iste podatke za verifikaciju.</b></p>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
          <div class="col-sm">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email adresa</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Lozinka</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              
              <div class="form-group">
                <label for="adressField">Adresa</label>
                <input v-model="adress" type="text" class="form-control" id="adressField" aria-describedby="adressHelp" placeholder="Enter adress">
              </div>  
              <div class="form-group">
                <label for="cityField">Grad</label>
                <input v-model="city" type="text" class="form-control" id="cityField" aria-describedby="cityHelp" placeholder="Enter city">
              </div> 
              <div class="form-group">
                <label for="insuranceField">Osiguranje</label>
                <input v-model="insurance" type="text" class="form-control" id="insuranceField" aria-describedby="insuranceHelp" placeholder="Enter insurance">
              </div> 
              <div class="form-group">
                <label for="categoryField">Položene kategorije vozačke dozvole</label>
                <input v-model="category" type="text" class="form-control" id="categoryField" aria-describedby="categoryHelp" placeholder="Enter category">
              </div> 
              <div class="form-group">
                <label for="telephoneField">Broj telefona</label>
                <input v-model="telephone" type="text" class="form-control" id="telephoneField" aria-describedby="telephoneHelp" placeholder="Enter telephone">
              </div> 
              <button type="submit" class="btn btn-primary">Submit</button>
              <router-link to="/signup">
                <p>Nemate račun? Registrirajte se!</p>
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
      email: '',
      password: '',
      adress: '',
      city: '',
      insurance: '',
      category: '',
      telephone: ''
    };
  },
  methods: {
    async login() { // dodaje se async na login
      let success = await Auth.login(this.email, this.password, this.adress, this.city, this.insurance, this.category, this.telephone);
      console.log('Rezultat prijave ', success);

      if (success == true){ // ako se prijava dogodila, redirekcija na stranicu
        this.$router.push({ name: 'Izbornik' });  
      }  
    },
  },
};
</script>