<template>
  <div class="odabirtermina">
    <h1 style="padding: 20px; color: #2c3e50">Odabir termina:</h1>
    <form @submit.prevent="accetpDuration" class="form-group col-md-3" style="display: inline-block;">
        <div class="form-group">
            <div class="form-group">
                <label for="exampleInputStart">Početak korištenja:</label>
                <input v-model="rentStart" size="50" type="date" class="form-control" id="exampleInputStart" aria-describedby="emailHelp">
            </div>
        </div>

        <div class="form-group">
            <label for="exampleText">Lokacija prihvaćanja vozila:</label>
            <input v-model="location" type="text" class="form-control" id="exampleText" placeholder="Lokacija">
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Završetak korištenja:</label>
            <input v-model="rentEnd" type="date" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <!-- <router-link to="/plaćanje" sytle="float: left">  -->
            <button type="submit" class="btn btn-primary">Prihvati</button>  
        <!-- </router-link> -->
        <br>
        <br>
        <router-link to="/klasa">
            <p>Prije odabira termina, potrebno je odabrati vozilo</p>
        </router-link>
    </form>
  </div>
</template>

<script>
import { Trajanje_Najama } from '@/services';

export default {
    data() {
        return {
            rentStart: '', 
            location: '',
            rentEnd: '', 
        };
    },
    methods: {
        async accetpDuration() { 
            let success2 = await Trajanje_Najama.accetpDuration(this.rentStart, this.location, this.rentEnd);
            console.log('Rezultat prijave perioda ', success2);

            if (success2 == true){ // ako se upis dogodio, redirekcija na stranicu
                this.$router.push({ name: 'Plaćanje' });  
            }
        },  
    },
}
 
</script>
