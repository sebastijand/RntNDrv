<template>
  <div class="klasa">
    <h1 style="padding: 20px; color: #2c3e50">Klasa</h1>
    <!--
    <router-link to="/uređivanjeprofila">
      <p>Prije odabira vozila, potrebno je <strong> nadopuniti vlastiti profil!</strong></p>
    </router-link>
    -->
  
    <!-- <div class="izbornik1" style="float: left; padding: 20px; width: 300px"> -->
    <div class="izbornik1" style=" padding: 20px; width: 300px; height: 340px">
      <img src="vw up transparent.png" style="width: 250px; height: 160px">
      <h1>Mini</h1> 
      <router-link to="/mini" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
    </div>
    
    <!-- <div class="izbornik1" style="float: left; padding: 20px; width: 300px"> -->
    <div class="izbornik1" style=" padding: 20px; width: 300px; height: 340px">
      <img src="škodaoctavia.png" style="width: 250px; height: 160px">
      <h1>Sedan</h1> 
      <router-link to="/sedan" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
    </div>
    
    <!-- <div class="izbornik1" style="float: left; padding: 20px; width: 300px"> -->
    <div class="izbornik1" style=" padding: 20px; width: 300px; height: 340px">
      <img src="opel-vivaro-png.png" style="width: 250px; height: 160px">
      <h1>Kombi</h1> 
      <router-link to="/kombi" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
    </div>

    <!-- <div class="izbornik1" style="float: left; padding: 20px; width: 300px"> -->
    <div class="izbornik1" style=" padding: 20px; width: 300px; height: 340px">
      <img src="2016-volkswagen-golf-4dr-hatchback-angular-front.png" style="width: 250px; height: 160px">
      <h1>Kompakt</h1> 
      <router-link to="/kompakt" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
    </div>

    <div class="izbornik1" style="padding: 20px; width: 300px"> 
    <!-- <div class="izbornik1" style=" float: left; padding: 20px; width: 300px; height: 340px"> -->
      <img src="PiaggioMedley.png" style="width: 250px; height: 160px">
      <h1>Skuter</h1> 
      <router-link to="/skuter" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
    </div>

    <div class="izbornik1" style="padding: 20px; width: 300px"> 
    <!--<div class="izbornik1" style=" float: left; padding: 20px; width: 300px; height: 340px">-->
      <img src="mercedes-s-class.png" style="width: 250px; height: 160px">
      <h1>Premium</h1> 
      <router-link to="/premium" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5" style="width: 100px">Odaberi</button>
      </router-link> 
    </div>

  </div>
</template>


<style scoped>
  .izbornik1 {
    display: inline-block;
    /*display: flex;*/
    /*margin-right: .41667em;*/
    margin: 15px;
    padding: 40px;
    border-style: inset;
    border-width: 1px;
    border-color: rgb(179, 171, 151);
    border-radius: 5px;
    background-color: #f1f1f1;
  } 
</style>