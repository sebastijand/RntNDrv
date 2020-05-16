<!--
<template>
  <div class="signup" style="padding: 20px">
    <h1>Signup</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm">
          <form @submit.prevent="signup">
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
            </div>

            <div class="form-group">
              <label for="usernameField">Name</label>
              <input v-model="username" type="text" class="form-control" id="usernameField" aria-describedby="usernameHelp" placeholder="Enter name">
            </div>

            <div class="form-group">
              <label for="usersurnameField">Surname</label>
              <input v-model="usersurname" type="text" class="form-control" id="usersurnameField" aria-describedby="usersurnameHelp" placeholder="Enter surname">
            </div> 

            <div class="form-group">
              <label for="adressField">Adress</label>
              <input v-model="adress" type="text" class="form-control" id="adressField" aria-describedby="adressHelp" placeholder="Enter adress">
            </div>  
            
            <div class="form-group">
              <label for="cityField">City</label>
              <input v-model="city" type="text" class="form-control" id="cityField" aria-describedby="cityHelp" placeholder="Enter city">
            </div> 

            <div class="form-group">
              <label for="insuranceField">Insurance</label>
              <input v-model="insurance" type="text" class="form-control" id="insuranceField" aria-describedby="insuranceHelp" placeholder="Enter insurance">
            </div> 

            <div class="form-group">
              <label for="categoryField">Category</label>
              <input v-model="category" type="text" class="form-control" id="categoryField" aria-describedby="categoryHelp" placeholder="Enter category">
            </div> 

            <div class="form-group">
              <label for="telephoneField">Telephone</label>
              <input v-model="telephone" type="text" class="form-control" id="telephoneField" aria-describedby="telephoneHelp" placeholder="Enter telephone">
            </div> 
            
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="At least 6 digets.">
            </div>

            <div class="form-group">
              <label for="confirmPasswordField">Confirm Password</label>
              <input v-model="passwordConfirmation" type="password" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template> 



<script>
export default {
  name: "signup",
  data () {
    return {
      email: "",
      username: "",
      usersurname: "",
      adress: "",
      city: "",
      insurance: "",
      category: "",
      telephone: "",
      password: "",
      passwordConfirmation: "" ,
    }
  },
  methods: {
    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {  // <- POGLEDAT DA LI OVDJE TREBA DODAVAT INFORMACIJE IZ DATA
        let id = this.email;
        //    TRENUTNO NE RADI JER TREBA SPOJIT PODATKE U DATABASE 
        //    (VIDIT AKO TREBA MJENJAT U REAL DATABASE ILI PROBAT SREDIT CLOUD FIRESTORE)
        //    TAKOĐER POGLEDAJ "index.html" (public folder)
        //    OBRISAT KOMENTAR I SREDIT KOD NA "App.vue"
        db.collection("users")
            .doc(id)
            .set({
              displayName: this.username,
              displaySurname: this.usersurname,
              displayAdress: this.adress,
              displayCity: this.city,
              userInsurance: this.insurance,
              userCategory: this.category,
              displayTel: this.telephone


              //newBio: this.writeSomething,
              //newLocation: this.choosenLocation
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        })
        
        .catch(error  => {
          console.error(error);
          this.errorMessage = error.message;
        });
    }
    /*signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
      });
    }*/
  }
}
</script>
-->