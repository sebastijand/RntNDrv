<template>
  <div class="login" style="padding: 20px">
    <h1>Promjena lozinke</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form @submit.prevent="newpass">
            <div class="form-group">
              <label for="exampleInputEmail1">Unesite vašu email adresu</label>
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Upišite vašu staru lozinku</label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2">Upišite vašu novu lozinku</label>
              <input v-model="newPassword" type="password" class="form-control" id="exampleInputPassword2" placeholder="New password">
            </div>
            <button type="submit" class="btn btn-primary mt-5" style="margin-right: 15px">Prihvati</button>
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
      email: '',
      password: '',
      newPassword: '',
    };
  },
  methods: {
    async newpass() {
      let success = await Auth.changePassword(this.email, this.password, this.newPassword);
      console.log('Rezultat upisa ', success);

      if (success == true){ 
        //this.$router.push({ name: 'Login' }); 
        this.$router.push({ name: 'Profil Korisnika' });  
      }  
    },
  },
};
</script>