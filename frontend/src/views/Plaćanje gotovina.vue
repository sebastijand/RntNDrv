<template>
  <div class="plaćanjegot">
    <h1 style="padding: 20px; color: #2c3e50">Plaćanje gotovinom:</h1>
    <form class="form-group col-md-4" style="display: inline-block;">
        <div class="form-group">
            <label for="exampleInputEmail1">Ime:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Prezime:</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Adresa:</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Grad:</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <!--
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        -->
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
    <!-- 
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
  </div>
</template>

<script>

</script>