<template>
  <div>
    <!-- <form @submit.prevent="choosenVozilo"> -->
      <div v-if="card">
        <InfoVehiclesComponent :info="card" />
      </div>
    <!-- </form> -->
  </div>
</template>


<script>
import InfoVehiclesComponent from '@/components/InfoVehiclesComponent.vue';
import { Vozilo, Ugovor } from '@/services';

export default {
  props: ['sasija'],
  data() {
    return {
      card: null,
      imeVozila: '',
      modelVozila: '',
      klasaVozila: '',
    };
  },
  async mounted() {
    console.log(this.sasija)
    this.card = await Vozilo.choosenVehicle(this.sasija);
  },
  /*
  methods: {
    async choosenVozilo() { 
      let success = await Ugovor.choosenVozilo(this.imeVozila, this.modelVozila, this.klasaVozila);
      console.log('Rezultat: ', success);
      
      if (success == true){ 
        this.$router.push({ name: 'Odabir termina' });  
      }  
    },
  },
  */
  name: 'informacije-vozila',
  components: {
    InfoVehiclesComponent
  }
};
</script>



<style scoped>
.info {
  margin: auto;
  width: 60%;
  /*border: 3px solid #73AD21;*/
  padding: 10px;
}
</style>