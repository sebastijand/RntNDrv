<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" style="float: left">Home</router-link>
      
      <router-link v-if="auth.authenticated" style="float: left" to="/login">
        <a @click="logout" href="#">Logout</a>
      </router-link>
      
      <router-link v-if="!auth.authenticated" to="/login" style="float: left">
        Login
      </router-link>
            
      <!--
      <span v-if="!auth.authenticated" style="float: left">
        <a @click="logout" href="#">Login</a>
      </span>
      -->

      <!--
      <span v-if="auth.authenticated" style="float: left">
        <a @click="logout" href="#">Login</a>
      </span>
      -->
      
      
    </div>
    <router-view/>
  </div>
</template>


<script type="text/javascript">
import store from '@/store.js'
import { Auth } from '@/services';

export default {
  data () {
    return {
      ...store,
      auth: Auth.state,
    }
  },
  methods: {
    logout() {
      Auth.logout();
      this.$router.push('login')
      //this.$router.go();
    }
  },
  
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: rgb(30,57,89);
  background: linear-gradient(50deg, rgba(30,57,89,1) 0%, rgba(6,204,244,1) 100%);
  font-size: 15px;


  padding: 25px;
  a {
    padding: 5px;
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
