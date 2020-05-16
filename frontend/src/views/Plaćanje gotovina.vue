<template>
  <div class="plaćanjegot">
    <h1 style="padding: 20px; color: #2c3e50">Plaćanje gotovinom:</h1>
    <form class="form-group col-md-4" style="display: inline-block;">
        <div class="form-group">
            <label for="exampleInputName">Ime:</label>
            <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Ime">
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
        <p><strong>Plaćanje se odvija u poslovnici</strong></p>
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