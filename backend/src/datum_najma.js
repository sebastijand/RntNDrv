import mongo from 'mongodb';
import connect from './db';
//import bcrypt from "bcrypt";  
//import jwt from "jsonwebtoken";     

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
    },
};