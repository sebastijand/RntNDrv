import mongo from 'mongodb';
import connect from './db';
//import bcrypt from "bcrypt";  
//import jwt from "jsonwebtoken";     

// UNIQUE E-MAIL ADRESA/USERNAME
//(async () => {
//    let db = await connect();
//    await db.collection('users').createIndex({ username: 1}, { unique: true });
//})();


//  STEPS: datum_najma.js ✓ -> index.js(backend) ✓ -> index.js(services) ✓ -> Odabir termina.vue ✓


export default {
    // UNOS PODATAKA U NAŠU MONGODB BAZU
    async registerDuration(userDuration) {  
        let db = await connect();
        let doc = {
            pocetak_iznajmljivanja: userDuration.pocetak_iznajmljivanja,
            lokacija_prihvata: userDuration.lokacija_prihvata,
            kraj_iznajmljivanja: userDuration.kraj_iznajmljivanja, 
        };
        try {
            let result = await db.collection('rentDuration').insertOne(doc);
            if (result && result.insertedId) {
                return result.insertedId;
            }
        } catch (e) {
            if (e.name == 'MongoError' && e.code == 11000){
                throw new Error('Ovi podaci su već uneseni')
            }
        }
        //await db.collection('payment').insertOne(doc);
        //console.log("tu smo", userPayment)
    },
};