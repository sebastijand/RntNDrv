import mongo from 'mongodb';
import connect from './db';
//import bcrypt from "bcrypt";  
//import jwt from "jsonwebtoken";     


export default {
    // UNOS PODATAKA U NAŠU MONGODB BAZU
    async registerPayment(userPayment) {  
        let db = await connect();
        let doc = {
            // KREDITNA 
            br_kartice: userPayment.br_kartice, // await bcrypt.hash(userPayment.br_kartice, 10)
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
    },
};
