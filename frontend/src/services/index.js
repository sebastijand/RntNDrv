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

let Placanje_Novac = {
    async spremiBazaGot(mjesto_poslovnice){    
        let response = await Service.post('/paymentsnovac', { 
            mjesto_poslovnice: mjesto_poslovnice
        });
        let payment = response.data;  
        localStorage.setItem('paymentCash', JSON.stringify(payment)); 
        return true;
    },
    async confirmCash(mjesto_poslovnice){    
        let response = await Service.post('/paymentscash', { 
            mjesto_poslovnice: mjesto_poslovnice,
        });
        let cash = response.data;  
        localStorage.setItem('paymentCash2', JSON.stringify(cash)); 
        return true;
    },
    getCash() {
        return JSON.parse(localStorage.getItem('paymentCash2'));
    },
    statePlaćanjeNovac: {
        get paymentCashStore() {
            let placanje = Placanje_Novac.getCash();
            if (placanje) {
                return placanje.mjesto_poslovnice;
            }
        }
    }
}

// DIO VEZAN ZA PLAĆANJE
let Placanje = {
    async spremiBazaKred(br_kartice, datum_isteka, ime_kompanije){    
        let response = await Service.post('/paymentskreditna', { 
            br_kartice: br_kartice,
            datum_isteka: datum_isteka,
            ime_kompanije: ime_kompanije,
        });
        let placanje = response.data;  
        localStorage.setItem('paymentCred', JSON.stringify(placanje)); 
        return true;
    },
    async confirmCredit(br_kartice, datum_isteka, ime_kompanije){    
        let response = await Service.post('/paymentcredit', { 
            br_kartice: br_kartice,
            datum_isteka: datum_isteka,
            ime_kompanije: ime_kompanije,
        });
        let credit = response.data;  
        localStorage.setItem('paymentCred2', JSON.stringify(credit)); 
        return true;
    },
    getCred() {
        return JSON.parse(localStorage.getItem('paymentCred2'));
    },
    statePlaćanje: {
        //get paymentType() {
        //let placanje = Placanje.getCred();
            //if (placanje) {
            //    return placanje.br_kartice;
            //}
        //},
        get creditCardName() {
            let placanje = Placanje.getCred();
            if (placanje) {
                return placanje.ime_kompanije;
            }
        },
    },
}

// DIO VEZAN ZA TRAJANJE NAJMA
let Trajanje_Najama = {
    async accetpDuration(pocetak_iznajmljivanja, lokacija_prihvata, kraj_iznajmljivanja){    
        let response = await Service.post('/durations', { 
            pocetak_iznajmljivanja: pocetak_iznajmljivanja,
            lokacija_prihvata: lokacija_prihvata,
            kraj_iznajmljivanja: kraj_iznajmljivanja
        });
        let najam = response.data;  
        localStorage.setItem('rentDuration', JSON.stringify(najam)); 
        return true;
    },
    async testDuration(pocetak_iznajmljivanja, lokacija_prihvata, kraj_iznajmljivanja){    
        let response = await Service.post('/duration', { 
            pocetak_iznajmljivanja: pocetak_iznajmljivanja,
            lokacija_prihvata: lokacija_prihvata,
            kraj_iznajmljivanja: kraj_iznajmljivanja
        });
        let najam2 = response.data;  
        localStorage.setItem('rentDuration2', JSON.stringify(najam2)); 
        return true;
    },
    getNajam() {
        return JSON.parse(localStorage.getItem('rentDuration2'));
    },
    state2: {
        get dateFrom() {
            let user = Trajanje_Najama.getNajam();
            if (user) {
                return user.pocetak_iznajmljivanja;
            }
        },
        get dateTo() {
            let user = Trajanje_Najama.getNajam();
            if (user) {
                return user.kraj_iznajmljivanja;
            }
        },
        get carSomething() {
            let user = Trajanje_Najama.getNajam();
            if (user) {
                return user.lokacija_prihvata;
            }
        }
    },
};

// DIO VEZAN ZA PRIKAZ VOZILA IZ BAZE

//
////
//////
//////// VIDIT DA LI DA PUSTIM IME "sasija" ILI DA PROMJENIM U NEŠTO DRUGO
//////
////
//

let Vozilo = {
    async choosenVehicle(sasija){
        let response = await Service.get(`/vozilo/${sasija}`)
        let najam_vozila = response.data; 
        localStorage.setItem('izabranoVozilo', JSON.stringify(najam_vozila));
        return {  
            // DESNI DIO (.sasija, .ime, itd...) SU NAZIVI IZ MONGODB BAZE  
            idVoz: najam_vozila._id,
            sasijaVoz: najam_vozila.sasija,
            imeVoz: najam_vozila.ime,
            modelVoz: najam_vozila.model,
            klasaVoz: najam_vozila.klasa,
            godina_proizvodnjeVoz: najam_vozila.godina_proizvodnje,
            bojaVoz: najam_vozila.boja,
            snagaVoz: najam_vozila.snaga,
            vrataVoz: najam_vozila.vrata,
            cijenaVoz: najam_vozila.cijena,
            logoVoz: najam_vozila.logo,
        };
    },
    getVozilo() {
        return JSON.parse(localStorage.getItem('izabranoVozilo'));
    },
    stateVozilo: {
        get carName() {
            let car = Vozilo.getVozilo();
            if (car) {
                return car.ime;
            }
        },
        get carModel() {
            let car = Vozilo.getVozilo();
            if (car) {
                return car.model;
            }
        },
        get carType() {
            let car = Vozilo.getVozilo();
            if (car) {
                return car.klasa;
            }
        },
        get carPrice() {
            let car = Vozilo.getVozilo();
            if (car) {
                return car.cijena;
            }
        },
        get carLogo() {
            let car = Vozilo.getVozilo();
            if (car) {
                return car.logo;
            }
        }
    },
    
    // AXIOS DIO VEZAN ZA KLASU SEDANA

    async classSedan(){
        let response = await Service.get(`/vozilo1`) //let response = await Service.get(`/vozilo1?ime=${vehicleName}`)
        return response.data.map((odabir_sedan) => {
            return {
                idVozSedan: odabir_sedan._id,
                imeVozSedan: odabir_sedan.ime,
                modelSedan: odabir_sedan.model,
                logoSedan: odabir_sedan.logo,
            };
        });
    },
    
    // AXIOS DIO VEZAN ZA KLASU MINI

    async classMini(){
        let response = await Service.get(`/vozilo2`)
        return response.data.map((odabir_mini) => {
            return {
                idVozMini: odabir_mini._id,
                imeVozMini: odabir_mini.ime,
                modelMini: odabir_mini.model,
                logoMini: odabir_mini.logo,
            }
        });
    },
    
    // AXIOS DIO VEZAN ZA KLASU KOMBI

    async classVan(){
        let response = await Service.get(`/vozilo3`)
        return response.data.map((odabir_kombi) => {
            return {
                idVozKombi: odabir_kombi._id,
                imeVozKombi: odabir_kombi.ime,
                modelKombi: odabir_kombi.model,
                logoKombi: odabir_kombi.logo,
            }
        });
    },

    async classKompakt(){
        let response = await Service.get(`/vozilo4`)
        return response.data.map((odabir_kompakt) => {
            return {
                idVozKompakt: odabir_kompakt._id,
                imeVozKompakt: odabir_kompakt.ime,
                modelKompakt: odabir_kompakt.model,
                logoKompakt: odabir_kompakt.logo,
            }
        });
    },

    async classSkuter(){
        let response = await Service.get(`/vozilo5`)
        return response.data.map((odabir_skuter) => {
            return {
                idVozSkuter: odabir_skuter._id,
                imeVozSkuter: odabir_skuter.ime,
                modelSkuter: odabir_skuter.model,
                logoSkuter: odabir_skuter.logo,
            }
        });
    },

    async classPremium(){
        let response = await Service.get(`/vozilo6`)
        return response.data.map((odabir_premium) => {
            return {
                idVozPremium: odabir_premium._id,
                imeVozPremium: odabir_premium.ime,
                modelPremium: odabir_premium.model,
                logoPremium: odabir_premium.logo,
            }
        });
    },
}

// DIO VEZAN ZA UGOVOR
let Ugovor = {
    async choosenVozilo(ime, model, klasa){ // async choosenVozilo(_id, ime, model, klasa)
        let response = await Service.post('/ugovor', { 
            //id: _id,
            ime: ime,
            model: model,
            klasa: klasa,
        });
        let najam = response.data;  
        localStorage.setItem('choosenVozilo', JSON.stringify(najam)); 
        return true;
    },
    removeEverything(){
        localStorage.removeItem('izabranoVozilo');
        localStorage.removeItem('paymentCash2');
        localStorage.removeItem('paymentCred2');
        localStorage.removeItem('rentDuration2');
    }
}


let Auth = {
    async login(username, password, adresa, grad, osiguranje, vozacka_dozvola, kontakt_tel){
        let response = await Service.post('/auth', {
            username: username,
            password: password,
            adresa: adresa, 
            grad: grad,
            osiguranje: osiguranje,
            vozacka_dozvola: vozacka_dozvola,
            kontakt_tel: kontakt_tel
        });
        let user = response.data;  
        localStorage.setItem('user', JSON.stringify(user)); 
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
        let user = response.data;  
        localStorage.setItem('user', JSON.stringify(user)); 
        return true;
    },
    
    ///

    async update(username, n_adresa, n_grad, n_osiguranje, n_vozacka_dozvola, n_kontakt_tel){
        let response = await Service.patch('/users', {
            username: username,
            n_adresa: n_adresa,
            n_grad: n_grad,
            n_osiguranje: n_osiguranje,
            n_vozacka_dozvola: n_vozacka_dozvola,
            n_kontakt_tel: n_kontakt_tel,
        })
        let update_profile = response.data;
        localStorage.setItem('user', JSON.stringify(update_profile)); // JSON.stringify pretvara objekt u string
    },

    async changePassword(username, old_password, new_password){
        let response = await Service.patch('/users', {
            username: username,
            old_password: old_password, 
            new_password: new_password
        }) 
        let update_profile = response.data;  // axios preko "data" izlvači podatke sa backenda
        localStorage.setItem('user', JSON.stringify(update_profile)); // JSON.stringify pretvara objekt u string
    },


    ///


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
    state: {
        get authenticated() {
            return Auth.authenticated;
        },
        get userEmail() { 
            let user = Auth.getUser();
            if (user) {
                return user.username;  
            }
        },
        get displayAdress(){
            let user = Auth.getUser();
            if (user) {
                return user.adresa;  
            }
        },
        get displayCity(){
            let user = Auth.getUser();
            if (user) {
                return user.grad;  
            }
        },
        get userInsurance(){
            let user = Auth.getUser();
            if (user) {
                return user.osiguranje;  
            }
        },
        get userCategory(){
            let user = Auth.getUser();
            if (user) {
                return user.vozacka_dozvola;  
            }
        },
        get displayTel(){
            let user = Auth.getUser();
            if (user) {
                return user.kontakt_tel;  
            }
        },
    },
};


export { Service, Placanje, Placanje_Novac, Trajanje_Najama, Auth, Vozilo, Ugovor}; 

