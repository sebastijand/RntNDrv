<template>
  <div class="plaćanjekred">
    <h1 style="padding: 20px; color: #2c3e50">Plaćanje kreditnom karticom:</h1>
    <form class="form-group col-md-4" style="display: inline-block;">
        <div class="form-group">
            <label for="exampleInputNumber">Broj karitce:</label>
            <input type="text" class="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        
        <div class="form-group">
            <label for="exampleInputDate">Datum isteka:</label>
            <input type="date" class="form-control" id="exampleInputDate" placeholder="Date">
        </div>
        
        <div class="form-group">
            <label for="exampleInputCompany">Ime kompanije:</label>
            <input type="text" class="form-control" id="exampleInputCompany" placeholder="Kompanija">
        </div>

        <div class="form-group">
            <label for="exampleInputName">Ime:</label>
            <input type="text" class="form-control" id="exampleInputName" placeholder="Ime">
        </div>
        
        <div class="form-group">
            <label for="exampleInputSurname">Prezime:</label>
            <input type="text" class="form-control" id="exampleInputSurname" placeholder="Prezime">
        </div>
        
        <div class="form-group">
            <label for="exampleInputAdress">Adresa:</label>
            <input type="text" class="form-control" id="exampleInputAdress" placeholder="Adresa">
        </div>
        
        <div class="form-group">
            <label for="exampleInputCity">Grad:</label>
            <input type="text" class="form-control" id="exampleInputCity" placeholder="Grad">
        </div>

        <div>
            <router-link to="/plaćanje" style="margin-right: 15px"> 
                <button type="submit" class="btn btn-primary">Natrag</button> 
            </router-link>
            <router-link to="/finalnapotvrda" style="margin-right: 15px"> 
                <button type="submit" class="btn btn-primary">Prihvati</button>  <!-- OVDJE DOLAZI POP-UP PROZOR!!! -->
            </router-link>
        </div>
    </form>
  </div>
</template>

<script>
</script>