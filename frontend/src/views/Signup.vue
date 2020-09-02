
<template>
  <div class="signup" style="padding: 20px">
    <h1>Signup</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="signup">
            <div class="form-group">
              <label for="emailField">Email adresa</label>
              <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            
            <div class="form-group">
              <label for="passwordField">Lozinka</label>
              <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="At least 6 digets.">
            </div>
            
            <div class="form-group">
              <label for="usernameField">Ime</label>
              <input v-model="name" type="text" class="form-control" id="usernameField" aria-describedby="usernameHelp" placeholder="Enter name">
            </div>

            <div class="form-group">
              <label for="usersurnameField">Prezime</label>
              <input v-model="surname" type="text" class="form-control" id="usersurnameField" aria-describedby="usersurnameHelp" placeholder="Enter surname">
            </div> 

            <div class="form-group">
              <label for="idField">Oib</label>
              <input v-model="oib" type="text" class="form-control" id="idField" aria-describedby="idHelp" placeholder="Enter id">
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
  name: "signup",
  data () {
    return {      
      email: "",
      password: "",
      name: "",
      surname: "",
      oib: "",
      adress: "",
      city: "",
      insurance: "",
      category: "",
      telephone: "",
    }
  },
  methods: {
    async signup() { 
      let success = await Auth.signup(this.email, this.password, this.name, this.surname, this.oib, this.adress, this.city, this.insurance, this.category, this.telephone);
      console.log('Rezultat prijave ', success);
    
      if (success == true){ 
        this.$router.push({ name: 'Login' });  
      }  
    },
  }
}
</script>


