<template>
  <div>
    <h1 style="padding: 20px; color: #2c3e50">Modeli</h1>
    <p><b>Odaberite vozilo klikom na sliku.</b></p>
    
    <div @click="gotoDetails(card)" v-bind:key="card.idVozKombi" v-for="card in Cards">
      <ChooseKombiComponent :choosekombi="card" /> 
    </div>

    <div style="float: left; margin: 20px; width: 200px"> 
      <img src="left arrow logo.png" alt="" style="width: 150px; height: 150px">
      <router-link to="/klasa" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ChooseKombiComponent from '@/components/ChooseKombiComponent.vue';
import { Vozilo } from '@/services';
import store from "@/store.js";

export default {
  data() {
    return {
      store,
      Cards: []
    };
  },
  async mounted() {
    this.Cards = await Vozilo.classVan();
  },
  name: 'kombi-klasa',
  methods: {
    gotoDetails(card) {
      this.$router.push({ path: `informacijevozilo/${card.idVozKombi}` });
    }
  },
  components: {
    ChooseKombiComponent
  }
};
</script>


<style scoped>
  .klasa1 {
    float: left;
    margin: 45px;
    padding: 40px;
    border-style: inset;
    border-width: 3px;
    border-color: rgb(80, 77, 39);
    border-radius: 5px;
    background-color: #f1f1f1;
  } 
</style>