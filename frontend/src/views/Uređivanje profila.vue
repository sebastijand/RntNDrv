<template>
  <div class="uređivanjeprofila">
    <h4 style="float: left; margin: 20px">Uređivanje profila:</h4>
    <form class="form-group col-md-7" style="display: inline-block;">
    <div>
      <div>
        <div class="col-md-6" style="margin: 10px">
          <p><b>Ime:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your name">
          <!-- <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">-->
        </div>
        <div class="col-md-6" style="margin: 10px">
          <p><b>Prezime:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your surname">
          <!-- <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">-->
        </div>
        <div class="col-md-6" style="margin: 10px">
          <p><b>Adresa:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your adress">
          <!-- <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">-->
        </div>
        <div class="col-md-6" style="margin: 10px">
          <p><b>Grad:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your city">
          <!-- <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">-->
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Osiguranje:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your insurance">
          <!-- <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">-->
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Vozačka dozvola:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your license">
          <!-- <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">-->
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Kontakt telefon:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your phone number">
          <!-- <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">-->
        </div>
        
        <div class="col-md-6" style="margin: 10px">
          <p><b>Kontakt e-mail:</b></p>
          <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter your e-mail">
          <!-- <input v-model="displayName" type="text" class="form-control" id="bio" placeholder="Enter the bio">-->
        </div>
        <router-link to="/profilkorisnika" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5">Primjeni</button>
        </router-link>
    </div>
    </div>
    </form>
  </div>
</template>


<style scoped>

</style>