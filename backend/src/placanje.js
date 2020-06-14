import mongo from 'mongodb';
import connect from './db';
//import bcrypt from "bcrypt";  -> VJEROJATNO POTREBNO VEZANO ZA KRED KARTICU!!!
//import jwt from "jsonwebtoken";     

// UNIQUE E-MAIL ADRESA/USERNAME
//(async () => {
//    let db = await connect();
//    await db.collection('users').createIndex({ username: 1}, { unique: true });
//})();


//  STEPS: placanje.js ✓ -> index.js(backend) ✓ -> index.js(services) -> Plaćanje.vue (gotovina i kred.)


export default {
    // UNOS PODATAKA U NAŠU MONGODB BAZU
    async registerPayment(userPayment) {  
        let db = await connect();
        let doc = {
            // KREDITNA 
            br_kartice: userPayment.br_kartice,
            datum_isteka: userPayment.datum_isteka,
            ime_kompanije: userPayment.ime_kompanije,
            // GOTOVINA
            mjesto_poslovnice: userPayment.mjesto_poslovnice,
            
            //password: await bcrypt.hash(userPayment.password, 8),  
        };
        try {
            let result = await db.collection('payment').insertOne(doc);
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
