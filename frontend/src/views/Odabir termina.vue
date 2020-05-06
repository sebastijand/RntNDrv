<template>
  <div class="odabirtermina">
    <h1 style="padding: 20px; color: #2c3e50">Odabir termina:</h1>
    <form class="form-group col-md-3" style="display: inline-block;">
        <div class="form-group">
            <div class="form-group">
                <label for="exampleInputEmail1">Početak korištenja:</label>
                <input size="50" type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
        </div>

        <!--                    PROMJENIT OVAJ DIV                  -->

        <div class="form-group">
            <label for="exampleInputPassword1">Lokacija prihvaćanja vozila:</label>
            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <!--                                                        -->

        <div class="form-group">
            <label for="exampleInputPassword1">Završetak korištenja:</label>
            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <!--
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        -->
        <router-link to="/plaćanje" sytle="float: left"> <!-- TEST PLAĆANJE -->
            <button type="submit" class="btn btn-primary">Prihvati</button>  <!-- OVDJE DOLAZI POP-UP PROZOR!!! -->
        </router-link>
        <br>
        <br>
        <router-link to="/klasa">
            <p>Prije odabira termina, potrebno je odabrati vozilo</p>
        </router-link>
    </form>
    <!-- 
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    -->
  </div>
</template>

<script></script>
