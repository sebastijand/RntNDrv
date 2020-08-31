<template>
  <div class="model">
    <h1 style="padding: 20px; color: #2c3e50;">Informacije o vozilu</h1>

    <div style="float: left; margin: 10px">
      <img :src="info.logoVoz" style="width: 200px; height: 200px;">
      <h2> {{ info.imeVoz }} {{ info.modelVoz }}</h2> 

      <router-link to="/klasa" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
      <router-link to="/odabirtermina" style="float: left; margin-right: 15px">
        <button type="submit" style="float: left; margin-right: 15px" class="btn btn-primary mt-5">Odaberi termin</button>
      </router-link>
    </div>

    <div class="info" style="float: left; margin: 10px">
      <h3>Godina proizvodnje: {{ info.godina_proizvodnjeVoz }} </h3>
      <h3>Boja:  {{ info.bojaVoz }} </h3>
      <h3>Snaga (kW):  {{ info.snagaVoz }} </h3>
      <h3>Vrata:  {{ info.vrataVoz }} </h3>
      <h3>Cijena (po danu):  {{ info.cijenaVoz }} </h3>
    </div>
  </div>
</template>

 
<script type="text/javascript">
import store from '@/store.js'
import { Vozilo } from '@/services';

export default {
  props: ['info'],
  data () {
    return {
      global: store
    }
  },
  methods: {
    async refresh() {
      let post = await Vozilo.choosenVehicle(this.info.sasija);
    },
  }
}
</script>


<style scoped>
.info {
  margin: auto;
  width: 60%;
  /*border: 3px solid #73AD21;*/
  padding: 10px;
}
</style>