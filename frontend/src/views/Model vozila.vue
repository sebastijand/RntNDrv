<template>
  <div class="model">
    <h1 style="padding: 20px; color: #2c3e50">Model</h1>

    <div style="float: left; margin: 20px; width: 300px">
      <img class="mercedeslogo" src="mercedes logo 2.png" style="width: 200px; height: 200px;"> <!-- <img class="mercedeslogo" src="mercedes logo.jpg" style="width: 200px; height: 200px;"> -->
      <h1>Mercedes Benz E-klasa</h1>
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link> 
    </div>

    <div style="float: left; margin: 20px; width: 300px">
      <img src="škoda logo.png" style="width: 200px;  height: 200px;">
      <h1>Škoda Octavia</h1> 
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link>
    </div>
    
    <div style="float: left; margin: 20px; width: 300px">
      <img src="audi logo.png" style="width: 300px; height: 200px">
      <h1>Audi A4</h1> 
      <router-link to="/informacijevozilo" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Odaberi</button>
      </router-link>
    </div>

    <div style="float: left; margin: 20px; width: 300px"> 
      <img src="left arrow logo.png" alt="" style="width: 250px; height: 250px">
      <router-link to="/klasa" sytle="float: left">
        <button type="file" class="btn btn-primary mt-5">Natrag</button>
      </router-link>
    </div>
  </div>
</template>

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