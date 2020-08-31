<template>
    <div class="model">
      <div style="float: left; margin: 20px; width: 200px">
      <img :src="choosemini.logoMini" style="width: 200px; height: 200px;"> 
      <h4> {{ choosemini.imeVozMini }} {{ choosemini.modelMini }}</h4>
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
}
</script>