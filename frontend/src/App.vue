<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/login">Login</router-link> -->
      <!--  <router-link to="/signup">Signup</router-link> -->
      <!-- <router-link to="/izbornik">Izbornik</router-link> -->
      <!--
      <router-link to="/profilkorisnika">Profil Korisnika</router-link>    
      <router-link to="/uređivanjeprofila">Uređivanje profila</router-link>
      <router-link to="/klasa">Klasa vozila</router-link>
      <router-link to="/status">Status iznajmljivanja</router-link>
      <router-link to="/model">Model vozila</router-link>
      <router-link to="/informacijevozilo">Informacije vozila</router-link>
      <router-link to="/odabirtermina">Odabir termina</router-link>
      <router-link to="/plaćanje">Plaćanje</router-link>
      <router-link to="/plaćanjekred">Plaćanje Kreditna</router-link>
      <router-link to="/plaćanjegot">Plaćanje gotovina</router-link>
      <router-link to="/finalnapotvrda">Status iznajljivanja</router-link>
      -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 // padding: 10px;
  background-color: #2c3e50;
  font-size: 15px;
  /*color: white;*/

  padding: 30px;
  a {
    padding: 13px;
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      //padding: 13px;
      background-color: rgb(255, 255, 255);
      color: #000000;
    }
  }
/*
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }*/
}
</style>
