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
                return result.insertedId
            }
        } catch (e) {
            if (e.name == 'MongoError' && e.code == 11000){
                throw new Error('Ovi podaci su već uneseni')
            }
        }
    },

    async confirmDuration(pocetak_iznajmljivanja, lokacija_prihvata, kraj_iznajmljivanja) {  
        let db = await connect()
        let user = await db.collection('rentDuration').findOne({ pocetak_iznajmljivanja: pocetak_iznajmljivanja, lokacija_prihvata: lokacija_prihvata, kraj_iznajmljivanja: kraj_iznajmljivanja })
        
        if (user){
            return {
                pocetak_iznajmljivanja: user.pocetak_iznajmljivanja,
                lokacija_prihvata: user.lokacija_prihvata,
                kraj_iznajmljivanja: user.kraj_iznajmljivanja
                // kontakt_tel: user.kontakt_tel
            }
        }
        else {
            throw new Error("Idk M8")
        }
    },
    /*
    async getDuration(pocetak_iznajmljivanja, lokacija_prihvata, kraj_iznajmljivanja) {
        let db = await connect() // spajamo se na bazu
        let user = await db.collection('rentDuration').findOne({ pocetak_iznajmljivanja: pocetak_iznajmljivanja, lokacija_prihvata: lokacija_prihvata, kraj_iznajmljivanja: kraj_iznajmljivanja})  // provjerava se da li postoji dokument sa istim "username" u bazi
        if (user && user.pocetak_iznajmljivanja && user.lokacija_prihvata && user.kraj_iznajmljivanja) {
            return {
                pocetak_iznajmljivanja: user.pocetak_iznajmljivanja,
                lokacija_prihvata: user.lokacija_prihvata,
                kraj_iznajmljivanja: user.kraj_iznajmljivanja
            }
        }
        else {
            throw new Error("Idk")
        }
    },
    */
};