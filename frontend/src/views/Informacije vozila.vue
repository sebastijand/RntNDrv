<template>
  <div class="model">
    <h1 style="padding: 20px; color: #2c3e50">Informacije o vozilu</h1>
    <div style="float: left; margin: 10px">
        <img src="car-font-awesome-computer-icons-sil-open-font-license-font-car-png-clip-art.png" style="width: 100px">
        <h1>Slika škoda</h1>
        <h1>Godina proizvodnje: </h1>
        <h1>Boja:</h1>
        <h1>Snaga (kW):</h1>
        <h1>Vrata:</h1>
        <h1>Cijena (po danu):</h1>
    </div>
    <div style="float: left; margin: 10px">  <!-- <div class="klasa1" style="float: left; margin: 10px"> -->               
        <h1>Škoda Octavia</h1>
        <h1>2017</h1> 
        <h1>Metalik siva</h1>
        <h1>81</h1>
        <h1>5</h1>
        <h1>100 kn</h1>
    </div>
     <div> <!-- <div class="klasa1" style="float: left; margin: 10px"> -->
        <router-link to="/model" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5">Odaberi termin</button>
        </router-link>
        <router-link to="/klasa" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5">Natrag</button>
        </router-link>
    </div>
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