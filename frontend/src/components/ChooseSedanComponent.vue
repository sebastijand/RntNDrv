<template>
  <div class="model">
    <div style="float: left; margin: 20px; width: 200px">
      <img :src="choosesedan.logoSedan" style="width: 200px; height: 200px;">
      <h4> {{ choosesedan.imeVozSedan }} {{ choosesedan.modelSedan }}</h4>
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
}
</script>