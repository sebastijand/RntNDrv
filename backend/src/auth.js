
import mongo from 'mongodb';
import connect from './db';
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";     

// UNIQUE E-MAIL ADRESA/USERNAME
(async () => {
    let db = await connect();
    await db.collection('users').createIndex({ username: 1}, { unique: true });
})();

export default {
    // UNOS PODATAKA U NAŠU MONGODB BAZU
    async registerUser(userData) { 
        let db = await connect();
        let doc = {
            username: userData.username,
            // kod passworda se dodaje bcrypt.hash i unutar zagrada broj 8 
            // doda se 8 random znakova kada se sprema u bazu šifra ("posoli" se šifra)
            // na taj u mongodb bazi se ispisuju random znakovi, a ne prava šifra
            password: await bcrypt.hash(userData.password, 8),  
            //oib: userData.oib,  // 
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
    },
    async authenticateUser(username, password, adresa, grad, osiguranje, vozacka_dozvola, kontakt_tel) {
        let db = await connect() // spajamo se na bazu
        let user = await db.collection('users').findOne({ username: username, adresa: adresa, grad: grad, osiguranje: osiguranje, vozacka_dozvola: vozacka_dozvola, kontakt_tel: kontakt_tel})
        
        // bcrypt uspoređuje upisanu lozinku na frontendu (password) i "posoljenu" lozinku na backendu za 8 random char (user.password)
        if (user && user.password && (await bcrypt.compare(password, user.password))) {
    
            delete user.password;   
            let token = jwt.sign(user, process.env.JWT_SECRET, {
                algorithm: "HS512",
                expiresIn: "1 week" // nakon tjedan dana token se izbriše i pita korisnika ponovno za ulogirat
            });  //  preko "user" dolazimo do svih podataka od korisnika
            return {
                token,
                username: user.username,
                adresa: user.adresa, 
                grad: user.grad,
                osiguranje: user.osiguranje,
                vozacka_dozvola: user.vozacka_dozvola,
                kontakt_tel: user.kontakt_tel
            }
        }
        else {
            throw new Error("Cannot authenticate")
        }
    },

    

    //PROFILE
    async changeProfileInfo(username, n_adresa, n_grad, n_osiguranje, n_vozacka_dozvola, n_kontakt_tel){
        let db = await connect();
        let user = await db.collection('users').findOne({ username: username });
        if (user && user.adresa && user.grad && user.osiguranje && user.vozacka_dozvola && user.kontakt_tel) {
            let result = await db.collection('users').updateMany( // <- VIDIT DA LI PUSTIT ILI STAVIT "updateOne"
                { _id: user._id },
                {
                    $set: {
                        adresa: n_adresa, 
                        grad: n_grad, 
                        osiguranje: n_osiguranje, 
                        vozacka_dozvola: n_vozacka_dozvola, 
                        kontakt_tel: n_kontakt_tel
                    },
                }
            );
            return result.modifiedCount == 1;
        }
    },
    

    //PASSWORD
    async changeUserPassword(username, old_password, new_password) {
        let db = await connect();
        let user = await db.collection('users').findOne({ username: username });

        if (user && user.password && (await bcrypt.compare(old_password, user.password))) {
            let new_password_hashed = await bcrypt.hash(new_password, 8);

            let result = await db.collection('users').updateOne(
                { _id: user._id },
                {
                    $set: {
                        password: new_password_hashed,
                    },
                }
            );
            return result.modifiedCount == 1;
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
