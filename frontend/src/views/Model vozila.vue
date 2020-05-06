<template>
  <div class="model">
    <h1 style="padding: 20px; color: #2c3e50">Model</h1>

    <div style="float: left; margin: 20px; width: 300px">
      <img src="mercedes e klassa.png" style="width: 300px">
      <h1>Mercedes Benz E-klasa</h1> 
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link> 
    </div>

    <div style="float: left; margin: 20px; width: 300px">
      <img src="škoda octavia.png" style="width: 300px">
      <h1>Škoda Octavia</h1> 
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link>
    </div>

    <div style="float: left; margin: 20px; width: 300px">
      <img src="audi.jpg" style="width: 300px">
      <h1>Audi A4</h1> 
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link>
    </div>

    <div style="float: left; margin: 20px; width: 300px"> <!-- <div class="klasa1" style="float: left; margin: 10px"> -->
      <img src="black-left-arrow-interface-symbol-reply-symbol.png" alt="" style="width: 300px">
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

<!-- 
<template>
  <div class="model">
    <h1 style="padding: 20px; color: #2c3e50">Model</h1>
    <div style="float: left; margin: 10px; width: 300px">
      <img src="mercedes e klassa.png" style="width: 300px">
      <!-- <h1>Slika mercedes</h1> 
      <img src="škoda octavia.png" style="width: 300px">
      <!-- <h1>Slika škoda</h1> 
      <img src="audi.jpg" style="width: 300px">
      <!-- <h1>Slika audi</h1> 
    </div>
    <div style="float: left; margin: 10px">  <!-- <div class="klasa1" style="float: left; margin: 10px"> 
      <h1>Mercedes Benz E-klasa</h1>                
      <h1>Škoda Octavia</h1>
      <h1>Audi A4</h1>
    </div>
    <div> <!-- <div class="klasa1" style="float: left; margin: 10px"> 
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link>
      <br>
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link>
      <br>
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link>
      <br>
      <router-link to="/klasa" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
    </div>
    <!-- 
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    
  </div>
</template>
-->
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