<template>
  <div class="plaćanje">
    <h1 style="padding: 20px; color: #2c3e50">Način plaćanja</h1>

    <div class="izbornik1" style="margin-right: 50px;">
      <img src="Money_font_awesome.svg.png" style="width: 200px"> 
      <h1>Slika novac</h1> 
      <router-link to="/plaćanjegot" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Gotovinom</button> <!-- <button type="file" class="btn btn-primary mt-5" style="float: left; margin-right: 15px">Gotovinom</button> -->
      </router-link>
    </div>

    <div class="izbornik1" style="margin-right: 50px;">
      <img src="Credit_card_font_awesome.svg.png" style="width: 200px">      
      <h1>Slika kreditna kartica</h1>
      <router-link to="/plaćanjekred" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Kreditnom karticom</button>
      </router-link>
    </div>
    <!-- 
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
  </div>
</template>


<style scoped>
  .izbornik1 {
    display: inline-block;
    margin: 45px;
    padding: 40px;
    border-style: inset;
    border-width: 3px;
    border-color: rgb(80, 77, 39);
    border-radius: 5px;
    background-color: #f1f1f1;
  } 
</style>