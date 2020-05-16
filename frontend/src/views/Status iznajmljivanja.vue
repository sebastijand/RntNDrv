<template>
  <div class="status">
    <h1 style="padding: 20px; color: #2c3e50">Status iznajmljivanja</h1>

    <div style="float: left; margin: 10px">
      <img src="škoda logo.png" style="width: 250px; height: 250px;">
      <h1>{{ carName }} {{ carModel }}</h1>
      <router-link to="/profilkorisnika" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
    </div>
    
    <div class="info" style="float: left; margin: 10px">
      <h2>Cijena: {{ carPrice }}</h2>
      <h2>Početak najma: {{ dateFrom }}</h2>
      <!-- <h2>Lokacija prihvaćanja vozila: {{ }}</h2> -->
      <h2>Završetak najma: {{ dateTo }}</h2>
      <h2>Datum stvaranja ugovora: {{ datumStvaranja }} </h2>
      <h2>Stanje najma: u tijeku / gotov <!-- {{ }} --></h2>      
    </div>
  
  </div>
</template>


<script type="text/javascript">
import store from '@/store.js'
export default {
  data () {
    return store;
  },
}
</script>


<style scoped>
  .info {
    margin: auto;
    width: 60%;
    padding: 10px;
  }
</style>