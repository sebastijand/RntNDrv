<template>
  <div class="home">
    <h1 style="padding: 20px; color: #2c3e50">WELCOME TO RENT AND DRIVE</h1>
    <div class="button">
      <router-link to="/login">
        <button type="file" class="btn btn-primary-outline" style="margin-right: 115px; font-size: 50px; width: 25%">Login</button>
        <!-- <button type="file" class="btn btn-primary mt-5" style="margin-right: 115px; font-size: 50px; width: 25%">Login</button> -->
      </router-link>
      
      <router-link to="/izbornik">
        <button type="file" class="btn btn btn-primary-outline" style="font-size: 50px; width: 25%">Izbornik</button>
      </router-link>
    </div>
    <!-- 
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
  </div>
</template>

<script>
// @ is an alias to /src

/*
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
*/
</script>

<style>
.btn-primary-outline {
  background-color: transparent;
  border-color: rgb(3, 238, 255);
  border-width: thin 2px 2px thin;
}
</style>