<template>
  <div class="model">
    <h1 style="padding: 20px; color: #2c3e50">Informacije o vozilu</h1>

    <div style="float: left; margin: 10px">
      <img src="škoda octavia.png" style="width: 300px">
      <h2>Škoda Octavia</h2> <!-- <h2 style="float: left">Škoda Octavia</h2> -->
      <router-link to="/odabirtermina" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Odaberi termin</button>
      </router-link>
      <!-- <br> -->
      <router-link to="/model" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
    </div>

    <div style="float: left; margin: 10px">
      <h2>Godina proizvodnje: </h2>
      <h2>Boja:</h2>
      <h2>Snaga (kW):</h2>
      <h2>Vrata:</h2>
      <h2>Cijena (po danu):</h2>
    </div>
    
    <div style="float: left; margin: 11px">  <!-- <div class="klasa1" style="float: left; margin: 10px"> -->                     
      <h2>2017</h2> 
      <h2>Metalik siva</h2>
      <h2>81</h2>
      <h2>5</h2>
      <h2>100 kn</h2>
    </div>
    <!-- <div>  <div class="klasa1" style="float: left; margin: 10px"> 
      <router-link to="/odabirtermina" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Odaberi termin</button>
      </router-link>
       <br> 
      <router-link to="/model" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
    </div> -->
    <!-- 
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
  </div>
</template>

<
<style scoped>
  .klasa1 {
    float: left;
    margin: 45px;
    padding: 40px;
    border-style: inset;
    border-width: 3px;
    border-color: rgb(80, 77, 39);
    border-radius: 5px;
    background-color: #f1f1f1;
  } 
</style>