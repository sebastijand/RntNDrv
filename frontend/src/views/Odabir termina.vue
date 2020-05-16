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
            <label for="exampleText">Lokacija prihvaćanja vozila:</label>
            <input type="text" class="form-control" id="exampleText" placeholder="Lokacija">
        </div>

        <!--                                                        -->

        <div class="form-group">
            <label for="exampleInputPassword1">Završetak korištenja:</label>
            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <router-link to="/plaćanje" sytle="float: left"> 
            <button type="submit" class="btn btn-primary">Prihvati</button>  
        </router-link>
        <br>
        <br>
        <router-link to="/klasa">
            <p>Prije odabira termina, potrebno je odabrati vozilo</p>
        </router-link>
    </form>
  </div>
</template>

<script></script>
