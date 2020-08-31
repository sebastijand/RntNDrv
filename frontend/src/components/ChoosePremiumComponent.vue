<template>
  <div class="model">
    <div style="float: left; margin: 20px; width: 200px">
      <img :src="choosepremium.logoPremium" style="width: 200px; height: 200px;">
      <h4> {{ choosepremium.imeVozPremium }} {{ choosepremium.modelPremium }}</h4> 
      </div>
  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
import { Vozilo } from '@/services';

export default {
  props: ['choosepremium'],
  data () {
    return {
      global: store
    }
  },
}
</script>