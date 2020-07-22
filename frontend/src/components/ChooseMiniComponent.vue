<template>
    <div class="model">
        <!-- <h1 style="padding: 20px; color: #2c3e50">Model</h1> -->

        <div style="float: left; margin: 20px; width: 300px">
        <!-- <img src="opellogo.png" style="width: 200px; height: 200px;">  <img class="mercedeslogo" src="mercedes logo.jpg" style="width: 200px; height: 200px;"> -->
        <img :src="choosemini.logoMini" style="width: 200px; height: 200px;"> 
        <h1> {{ choosemini.imeVozMini }} {{ choosemini.modelMini }}</h1>
        <!-- <router-link to="/informacijevozilo/:sasija" sytle="float: left"> -->
        <!-- <router-link to="/informacijevozilo" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5">Odaberi</button>
        </router-link> -->
        </div>
    </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
import { Vozilo } from '@/services';

export default {
  props: ['choosemini'],
  data () {
    return {
      global: store
    }
  },
  
  /*
  methods: {
    async refresh() {
      let post = await Vozilo.classSedan(this.choose.ime);
    },
  }
  */
}
</script>