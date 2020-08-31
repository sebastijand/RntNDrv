<template>
  <div class="izbornik" style="margin: 0 auto">
    <h1 style="padding: 20px; color: #2c3e50">Izbornik</h1>
    <div>

      <div class="izbornik1" style="float: left; margin: 30px; width: 390px; height: 358px">
        <img src="car icon.png" style="width: 190px; height: 190px">
        <router-link to="/klasa" style="display: inline-block;">
            <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Prikaz vozila</button>
        </router-link>
      </div>
      
      <div class="izbornik1" style="float: left; margin: 30px; width: 390px">
        <img src="clock icon.png" style="width: 190px; height: 190px">
        <router-link to="/odabirtermina" style="display: inline-block;">
            <button type="file" class="btn btn-primary mt-5">Odabir termina</button>
        </router-link>
      </div>
      
      <div class="izbornik1" style="float: left; margin: 30px; width: 390px">
        <img src="person icon.png" style="width: 190px; height: 190px"> 
        <router-link to="/profilkorisnika" style="display: inline-block;">
            <button type="file" class="btn btn-primary mt-5">Profil korisnika</button>
        </router-link>
      </div>

    </div>
  </div>
</template>


<style scoped>
  .izbornik1 {
    margin: 45px;
    padding: 40px;
    border-style: inset;
    border-width: 1px;
    border-color: rgb(179, 171, 151);
    border-radius: 5px;
    background-color: #f1f5eb;
  } 
  #container{width:100%;}
  #left{float:left;width:100px;}
  #right{float:right;width:100px;}
  #center{margin:0 auto;width:100px;}
</style>