<template>
  <div>
    <h1 style="padding: 20px; color: #2c3e50">Model</h1>
    
    <div @click="gotoDetails(card)" v-bind:key="card.idVozPremium" v-for="card in Cards">
      <ChoosePremiumComponent :choosepremium="card" /> 
    </div>
    
    <!--<div v-bind:key="card" v-for="card in Cards">
      <ChooseKombiComponent :choosekombi="card" /> 
    </div>-->

    <div style="float: left; margin: 20px; width: 300px"> 
      <img src="left arrow logo.png" alt="" style="width: 250px; height: 250px">
      <router-link to="/klasa" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ChoosePremiumComponent from '@/components/ChoosePremiumComponent.vue';
import { Vozilo } from '@/services';
import store from "@/store.js";

export default {
  //props: ['sasija'],
  data() {
    return {
      store,
      Cards: []
    };
  },
  /*methods: {
    async fetchPosts(term){
      term = term || store.vehicleName
      this.Cards = await Vozilo.classSedan(term/*this.sasija);
      //console.log(this.cards)
    }
  },*/
  async mounted() {
    this.Cards = await Vozilo.classPremium();
  },
  name: 'premium-klasa',
  methods: {
    gotoDetails(card) {
      this.$router.push({ path: `informacijevozilo/${card.idVozPremium}` });
    }
  },
  components: {
    ChoosePremiumComponent
  }
};
</script>


<style scoped>
  /*.mercedeslogo{

 -khtml-opacity:.50; 
 -moz-opacity:.50; 
 -ms-filter:”alpha(opacity=50)”;
  filter:alpha(opacity=50);
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0.5);
  opacity:.50; 
  }*/
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