<template>
    <div class="model">
        <!-- <h1 style="padding: 20px; color: #2c3e50">Model</h1> -->

        <div style="float: left; margin: 20px; width: 300px">
        <img :src="choosesedan.logoSedan" style="width: 200px; height: 200px;">
        <h1> {{ choosesedan.imeVozSedan }} {{ choosesedan.modelSedan }}</h1>
        <!--<router-link to="/informacijevozilo" sytle="float: left">
            <button type="file" class="btn btn-primary mt-5">Odaberi</button>
        </router-link> -->
        </div>
    </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
import { Vozilo } from '@/services';

export default {
  props: ['choosesedan'],
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