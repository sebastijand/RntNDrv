<template>
  <div class="klasa">
    <h1 style="padding: 20px; color: #2c3e50">Klasa</h1>

    <div style="float: left; margin: 20px; width: 300px">
      <img src="škoda.png" style="width: 250px">
      <h1>Mini</h1> 
      <!--
      <router-link to="/model" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
      -->
    </div>
    
    <div style="float: left; margin: 10px; width: 300px">
      <img src="audi.jpg" style="width: 250px">
      <h1>Sedan</h1> 
      <router-link to="/model" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
    </div>
    
    <div style="float: left; margin: 10px; width: 300px">
      <img src="opel-vivaro-png.png" style="width: 250px">
      <h1>Kombi</h1> 
      <!--
      <router-link to="/model" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
      -->
    </div>
    
    <div class="izbornik1" style="float: left; margin: 10px; width: 300px"> <!-- <div class="klasa1" style="float: left; margin: 10px"> -->    
      <router-link to="/uređivanjeprofila">
        <p>Prije odabira vozila, potrebno je nadopuniti vlastiti profil</p>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
  .izbornik1 {
    /*margin: 151px;*/
    padding: 15px;
    border-style: inset;
    border-width: 3px;
    border-color: rgba(1, 235, 252, 0.575);
    border-radius: 5px;
    /*background-color: #f1f1f1;*/
    background: rgb(255,255,255);
    background: linear-gradient(50deg, rgba(255,255,255,1) 0%, rgba(196,231,227,1) 100%);
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