<template>
  <div class="klasa">
    <h1 style="padding: 20px; color: #2c3e50">Klasa</h1>

    <div class="izbornik1" style="float: left; padding: 20px; width: 300px">
      <img src="vw up transparent.png" style="width: 250px">
      <h1>Mini</h1> 
      <!--
      <router-link to="/model" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
      -->
    </div>
    
    <div class="izbornik1" style="float: left; padding: 20px; width: 300px">
      <img src="audi transparent.png" style="width: 250px">
      <h1>Sedan</h1> 
      <router-link to="/model" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
    </div>
    
    <div class="izbornik1" style="float: left; padding: 20px; width: 300px">
      <img src="opel-vivaro-png.png" style="width: 250px">
      <h1>Kombi</h1> 
      <!--
      <router-link to="/model" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
      -->
    </div>
    
    <div class="izbornik1" style="float: left; margin: 10px; width: 200px"> <!-- <div class="klasa1" style="float: left; margin: 10px"> -->    
      <router-link to="/uređivanjeprofila">
        <p>Prije odabira vozila, potrebno je nadopuniti vlastiti profil</p>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
  .izbornik1 {
    display: inline-block;
    margin: 15px;
    padding: 40px;
    border-style: inset;
    border-width: 3px;
    border-color: rgb(80, 77, 39);
    border-radius: 5px;
    background-color: #f1f1f1;
  } 
  /*
  #container{width:100%;}
  #left{float:left;width:100px;}
  #right{float:right;width:100px;}
  #center{margin:0 auto;width:100px;}*/

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