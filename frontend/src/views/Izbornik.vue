<template>
  <div class="izbornik">
    <h1 style="padding: 20px; color: #2c3e50">Izbornik</h1>
    <div class="izbornik1" style="float: left; margin: 10px">
        <img src="car-font-awesome-computer-icons-sil-open-font-license-font-car-png-clip-art.png" style="width: 100px">
        <h1>Slika auto</h1>
        <router-link to="/klasa" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Prikaz vozila</button>
        </router-link>
    </div>
    <div class="izbornik1" style="float: left; margin: 10px">
        <img src="kisspng-clock-computer-icons-timer-font-awesome-countdown-uhr-icon-5b4c1135187bf5.3461825515317117971003.jpg" style="width: 100px">
        <h1>Slika sat</h1>
        <router-link to="/odabirtermina" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5">Odabir termina</button>
        </router-link>
    </div>
     <div class="izbornik1" style="float: left; margin: 10px">
        <img src="font-awesome-computer-icons-user-font-png-favpng-NQGbZvSGDv6eNj5S6cdzggBi4_t.jpg" style="width: 100px">
        <h1>Slika osoba</h1>
        <router-link to="/profilkorisnika" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5">Profil</button>
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
  .izbornik1 {
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