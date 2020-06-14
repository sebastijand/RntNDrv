
import mongo from 'mongodb';
import connect from './db';
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";     

// UNIQUE E-MAIL ADRESA/USERNAME
(async () => {
    let db = await connect();
    await db.collection('users').createIndex({ username: 1}, { unique: true });
})();


//  STEPS: auth.js -> index.js(backend) -> index.js(services) -> Login.vue


export default {
    // UNOS PODATAKA U NAŠU MONGODB BAZU
    async registerUser(userData) {  //--> VAŽNO ZA PROJEKT 
        let db = await connect();
        let doc = {
            username: userData.username,
            // kod passworda se dodaje bcrypt.hash i unutar zagrada broj 8 
            // doda se 8 random znakova kada se sprema u bazu šifra ("posoli" se šifra)
            // na taj u mongodb bazi se ispisuju random znakovi, a ne prava šifra
            password: await bcrypt.hash(userData.password, 8),  
            oib: userData.oib,  // -> TREBA DODAT U DRUGIM DATOTEKAMA JER SE OIB NE UPISUJE U BAZU
            ime: userData.ime,
            prezime: userData.prezime,
            adresa: userData.adresa,
            grad: userData.grad,
            osiguranje: userData.osiguranje,
            vozacka_dozvola: userData.vozacka_dozvola,
            kontakt_tel: userData.kontakt_tel,
        };
        try {
            let result = await db.collection('users').insertOne(doc);
            if (result && result.insertedId) {
                return result.insertedId;
            }
        } catch (e) {
            if (e.name == 'MongoError' && e.code == 11000){
                throw new Error('Korisnik već postoji')
            }
        }
        //await db.collection('users').insertOne(doc);
        //console.log("tu smo", userData)
    },

    //          VIDEO PART 2            \\  
    async authenticateUser(username, password) {  //--> korisnik sa frontenda se prijavljue putem "username" i "password" (ovi podaci dolaze sa frontenda)
        let db = await connect() // spajamo se na bazu
        let user = await db.collection("users").findOne({ username: username})  // provjerava se da li postoji dokument sa istim "username" u bazi
        
        // bcrypt uspoređuje upisanu lozinku na frontendu (password) i "posoljenu" lozinku na backendu za 8 random char (user.password)
        if (user && user.password && (await bcrypt.compare(password, user.password))) {
    
            delete user.password;   
            let token = jwt.sign(user, process.env.JWT_SECRET, {
                algorithm: "HS512",
                expiresIn: "1 week" // nakon tjedan dana token se izbriše i pita korisnika ponovno za ulogirat
            });  //  preko "user" dolazimo do svih podataka od korisnika
            return {
                token,
                username: user.username
            }
        }
        else {
            throw new Error("Cannot authenticate")
        }
    },
    verify(req, res, next) {  
        try {
            let authorization = req.headers.authorization.split(" ");
            let type = authorization[0];
            let token = authorization[1];

            // prima se samo "Bearer" token
            if (type !== "Bearer") {
                return res.status(401).send();
            }
            else {
                // ako je ok, unutar "req.jwt" spremamo ono što je potpisani (user iz jwt.sign)
                req.jwt = jwt.verify(token, process.env.JWT_SECRET);  
                // next() u "index.js" datoteci unutar '/tajna' rute provjerava atribute unutar middleware-a (ako ih je više)
                // ako nije prvi atribut, ide na drugi atribut, itd.., ako je nešto od toga, izvšavaju se kodovi unutar same rute
                return next();
            }
        }
        catch (e) {
            return res.status(401).send(); 
        }
    },
};
