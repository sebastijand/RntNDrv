<template>
  <div class="login" style="padding: 20px">
    <h1>Login</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
          <div class="col-sm">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Enter your email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
    };
  },
  methods: {
    async login() { // dodaje se async na login
      let success = await Auth.login(this.email, this.password);
      console.log('Rezultat prijave ', success);

      if (success == true){ // ako se prijava dogodila, redirekcija na stranicu
        this.$router.push({ name: 'Izbornik' });  //-> VJEROJATNO PROMJENIT U 'home'
      }  
    },
  },
};
</script>