<template>
  <div class="home">
    <h1 style="padding: 20px; color: #2c3e50">WELCOME TO RENT AND DRIVE</h1>
    <div class="button">
      <router-link to="/login">
        <button type="file" class="btn btn-primary-outline" style="margin-right: 115px; font-size: 50px; width: 25%">Login</button>
      </router-link>
      
      <router-link to="/izbornik">
        <button type="file" class="btn btn btn-primary-outline" style="font-size: 50px; width: 25%">Izbornik</button>
      </router-link>
    </div>
  </div>
</template>

<style>
.btn-primary-outline {
  background-color: transparent;
  border-color: rgb(3, 238, 255);
  /*
  border-color: rgb(30,57,89);
  border-color: linear-gradient(50deg, rgba(30,57,89,1) 0%, rgba(6,204,244,1) 100%);
  */
  border-width: thin 3px 3px thin;
}
</style>