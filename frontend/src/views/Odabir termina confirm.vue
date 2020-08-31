<template>
  <div class="odabirtermina">
    <h1 style="padding: 20px; color: #2c3e50">Potvrda o odabiru termina:</h1>
    <p style="padding: 20px; color: #2c3e50"><strong> Molimo vas da ponovno upišete podatke:</strong></p>
    <form @submit.prevent="testDuration" class="form-group col-md-3" style="display: inline-block;">
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
        <button type="submit" class="btn btn-primary">Prihvati</button> <!-- -->
        <router-link to="/odabirtermina">
          <button type="file" class="btn btn-primary">Natrag</button>
        </router-link> 
        <br>
        <br>
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
        async testDuration() { 
            let success2 = await Trajanje_Najama.testDuration(this.rentStart, this.location, this.rentEnd);
            console.log('Rezultat prijave perioda ', success2);

            if (success2 == true){ // ako se upis dogodio, redirekcija na stranicu
                this.$router.push({ name: 'Plaćanje' });  
            }
        },  
    },
}
 
</script>
