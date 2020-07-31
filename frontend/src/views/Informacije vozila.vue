<template>
  <div>
    <form @submit.prevent="choosenVozilo">
      <div v-if="card">
        <InfoVehiclesComponent :info="card" />
        <!-- <router-link @submit.prevent="login" style="float: left; margin-right: 15px"> -->
          <button type="submit" style="float: left; margin-right: 15px" class="btn btn-primary mt-5">Odaberi termin</button>
        <!-- </router-link> -->
      </div>
    </form>
  </div>
<!--  <div class="model">
    <h1 style="padding: 20px; color: #2c3e50;">Informacije o vozilu</h1>

    <div style="float: left; margin: 10px">
      <img src="škoda logo.png" style="width: 250px; height: 250px">
      <h2> {{ carName }} {{ carModel }}</h2> 
      <router-link to="/odabirtermina" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Odaberi termin</button>
      </router-link>
      <router-link to="/model" style="float: left; margin-right: 15px">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
    </div>

    <div class="info" style="float: left; margin: 10px">
      <h3>Godina proizvodnje: {{ carYear }} </h3>
      <h3>Boja:  {{ carColor }} </h3>
      <h3>Snaga (kW):  {{ carPower }} </h3>
      <h3>Vrata:  {{ carDoor }} </h3>
      <h3>Cijena (po danu):  {{ carPrice }} </h3>
    </div>
  </div>
-->
</template>

<script>
import InfoVehiclesComponent from '@/components/InfoVehiclesComponent.vue';
import { Vozilo } from '@/services';
import { Ugovor } from '@/services';

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
  methods: {
    async choosenVozilo() { 
      let success = await Ugovor.choosenVozilo(this.imeVozila, this.modelVozila, this.klasaVozila);
      console.log('Rezultat: ', success);
      
      if (success == true){ 
        this.$router.push({ name: 'Odabir termina' });  
      }  
    },
  },
  name: 'informacije-vozila',
  components: {
    InfoVehiclesComponent
  }
};
</script>


<!--
<script type="text/javascript">
import store from '@/store.js'
export default {
  data () {
    return store;
  },
}
</script>
-->


<style scoped>
.info {
  margin: auto;
  width: 60%;
  /*border: 3px solid #73AD21;*/
  padding: 10px;
}
</style>