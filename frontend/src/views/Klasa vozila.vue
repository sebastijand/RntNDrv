<template>
  <div class="klasa">
    <h1 style="padding: 20px; color: #2c3e50">Klasa</h1>
    <div style="float: left; margin: 20px; width: 300px">
        <img src="škoda.png" style="width: 300px">
        <h1>Mini</h1> 
        <router-link to="/model" sytle="float: left">
          <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
        </router-link> 
    </div>
    <div style="float: left; margin: 10px; width: 300px">
        <img src="audi.jpg" style="width: 300px">
        <h1>Sedan</h1> 
        <router-link to="/model" sytle="float: left">
          <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
        </router-link> 
    </div>
    <div style="float: left; margin: 10px; width: 300px">
        <img src="opel-vivaro-png.png" style="width: 300px">
        <h1><h1>Kombi</h1></h1> 
        <router-link to="/model" sytle="float: left">
          <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
        </router-link> 
    </div>
     <div style="float: left; margin: 10px; width: 300px"> <!-- <div class="klasa1" style="float: left; margin: 10px"> -->

        
        <router-link to="/uređivanjeprofila">
          <p>Prije odabira vozila, potrebno je nadopuniti vlastiti profil</p>
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
  <div class="klasa">
    <h1 style="padding: 20px; color: #2c3e50">Klasa</h1>
    <div style="float: left; margin: 10px; width: 300px">
        <img src="škoda.png" style="width: 300px">
        <!-- <h1>Slika auto</h1> 
        <img src="audi.jpg" style="width: 300px">
        <!-- <h1>Slika auto</h1> 
        <img src="opel-vivaro-png.png" style="width: 200px">
        <!-- <h1>Slika auto</h1> 
    </div>
    <div style="float: left; margin: 10px; width: 300px">  <!-- <div class="klasa1" style="float: left; margin: 10px"> 
        <h1>Mini</h1>            
        <h1>Sedan</h1>
        <h1>Kombi</h1>
    </div>
     <div style="float: left; margin: 10px; width: 300px"> <!-- <div class="klasa1" style="float: left; margin: 10px"> 
        <router-link to="/model" sytle="float: left">
          <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
        </router-link>
        <br>
        <router-link to="/model" sytle="float: left">
          <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
        </router-link>
        <br>
        <router-link to="/model" sytle="float: left">
          <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
        </router-link>
        
        <router-link to="/uređivanjeprofila">
          <p>Prije odabira vozila, potrebno je nadopuniti vlastiti profil</p>
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