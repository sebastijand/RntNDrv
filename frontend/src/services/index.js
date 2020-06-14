import axios from 'axios';
import $router from '@/router';
import router from '../router';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'http://localhost:3200/',
    timeout: 1000,
});

Service.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

Service.interceptors.response.use((response) => response, (error) => {
    if (error.response.status == 401 || error.response.status == 403){
        Auth.logout()
        $router.go()
    }
}) 



let Placanje = {
    async spremiBazaKred( br_kartice, datum_isteka, ime_kompanije ){    
        let response = await Service.post('/payments', { 
            br_kartice: br_kartice,
            datum_isteka: datum_isteka,
            ime_kompanije: ime_kompanije,
        });

        let placanje = response.data;  // axios preko "data" izlvači podatke sa backenda
        localStorage.setItem('payment', JSON.stringify(placanje)); // JSON.stringify pretvara objekt u string

        return true;
    },
    
    async spremiBazaGot( mjesto_poslovnice ){    
        let response = await Service.post('/payments', { 
            mjesto_poslovnice: mjesto_poslovnice
        });

        let payment = response.data;  // axios preko "data" izlvači podatke sa backenda
        localStorage.setItem('payment', JSON.stringify(payment)); // JSON.stringify pretvara objekt u string

        return true;
    },
    //state2: {
}



let Trajanje_Najama = {
    // POZOR: FUNKCIJA "accetpDuration" TREBA IMAT JEDNAKO IME I U VUE KOMPONENTI UNUTAR "methods"
    async accetpDuration( pocetak_iznajmljivanja, lokacija_prihvata, kraj_iznajmljivanja){    
        let response = await Service.post('/durations', { 
            pocetak_iznajmljivanja: pocetak_iznajmljivanja,
            lokacija_prihvata: lokacija_prihvata,
            kraj_iznajmljivanja: kraj_iznajmljivanja,
        });

        let najam = response.data;  // axios preko "data" izlvači podatke sa backenda
        localStorage.setItem('rentDuration', JSON.stringify(najam)); // JSON.stringify pretvara objekt u string

        return true;
    },

    /*
    state2:  {

    },
    */
};

/*
let Vozilo = {

}
*/

/*
let Ugovor = {

}
*/



let Auth = {
    async login(username, password){    // sprema token u local storage
        let response = await Service.post('/auth', {
            username: username,
            password: password,
        });

        let user = response.data;  // axios preko "data" izlvači podatke sa backenda
        localStorage.setItem('user', JSON.stringify(user)); // JSON.stringify pretvara objekt u string

        return true;
    },

    async signup(username, password, ime, prezime, adresa, grad, osiguranje, vozacka_dozvola, kontakt_tel) {
        let response = await Service.post('/users', {
            username: username,
            password: password,
            //oib: oib, --> DODAT GORE U ZAGRADE
            ime: ime,
            prezime: prezime,
            adresa: adresa,
            grad: grad,
            osiguranje: osiguranje,
            vozacka_dozvola: vozacka_dozvola,
            kontakt_tel: kontakt_tel,
        });
    
        let user = response.data;  // axios preko "data" izlvači podatke sa backenda
        localStorage.setItem('user', JSON.stringify(user)); // JSON.stringify pretvara objekt u string
    
        return true;
    },

    logout() {   // briše token iz local storage-a
        localStorage.removeItem('user');
    },

    // izvlači korisnika iz localStorage
    getUser() {
        return JSON.parse(localStorage.getItem('user'));  // JSON.parse pretvara string u objekt
    },
    getToken() {
        let user = Auth.getUser();
        if (user && user.token) {
            return user.token
        }
        else {
            return false;
        }
    },
    authenticated() {
        let user = Auth.getUser();
        if (user && user.token){
            return true;
        }
        return false;
    },
    // miče se signup gumb ako smo ulogirani
    state: {
        get authenticated() {
            return Auth.authenticated;
        },
        get userEmail() { // --> OVO RADI
            let user = Auth.getUser();
            if (user) {
                return user.username;  // vraća se korisničko ime
            }
        },
        get displayName() {  // --> NE ČITA PODATKE ("userInsurance" se također nalazi u "store.js")
            let user = Auth.getUser();
            if (user) {
                return user.ime;
            }
        },
        /*
        get userEmail() {
            let user = Auth.getUser();
            if (user) {
                return user.username;  // vraća se korisničko ime
                //return user.ime;
                //return user.prezime;
                //return user.adresa;
                //return user.grad;
                //return user.osiguranje;
                //return user.vozacka_dozvola;
                //return user.kontakt_tel;
            }
        },
        */
    },
};


export { Service, Placanje, Trajanje_Najama, Auth }; 

