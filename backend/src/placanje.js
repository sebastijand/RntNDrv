import mongo from 'mongodb';
import connect from './db';
import bcrypt from "bcrypt";  
//import jwt from "jsonwebtoken";     


export default {
    // UNOS PODATAKA U NAŠU MONGODB BAZU
    /*async registerPayment(userPayment) {  
        let db = await connect();
        let doc = {
            // KREDITNA 
            br_kartice: await bcrypt.hash(userPayment.br_kartice, 10), // userPayment.br_kartice,
            datum_isteka: userPayment.datum_isteka,
            ime_kompanije: userPayment.ime_kompanije,
            // GOTOVINA
            mjesto_poslovnice: userPayment.mjesto_poslovnice,
        };
        try {
            // let result = await db.collection('contract').insertOne(doc);
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
    
    async confirmPayment(br_kartice, datum_isteka, ime_kompanije, mjesto_poslovnice) {  
        let db = await connect()
        let user = await db.collection('payment').findOne({ datum_isteka: datum_isteka, ime_kompanije: ime_kompanije })
        let cash = await db.collection('payment').findOne({ mjesto_poslovnice: mjesto_poslovnice })
        // POGLEDAJ "auth.js" ZA BCRYPTIRANJE KREDITNE KARTICE!!!!
        if (user){
            return {
                // TOKEN KREDITNE KARTICE
                datum_isteka: user.datum_isteka,
                ime_kompanije: user.lokacija_prihvata,
            }
        }
        else if (cash){
            // OVO TRENUTNO NE RADI
            return {
                mjesto_poslovnice: cash.mjesto_poslovnice
            }
        }
        else {
            throw new Error("Error")
        }
    },*/
    
    async registerCredit(userPayment) {  
        let db = await connect();
        let doc = {
            // KREDITNA 
            //br_kartice: await bcrypt.hash(userPayment.br_kartice, 10), // userPayment.br_kartice,
            datum_isteka: userPayment.datum_isteka,
            ime_kompanije: userPayment.ime_kompanije,
        };
        try {
            // let result = await db.collection('contract').insertOne(doc);
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
    async registerCash(userPayment) {  
        let db = await connect();
        let doc = {
            // GOTOVINA
            mjesto_poslovnice: userPayment.mjesto_poslovnice,
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
    async confirmPayment(/*br_kartice, */datum_isteka, ime_kompanije) {  
        let db = await connect()
        let user = await db.collection('payment').findOne({ datum_isteka: datum_isteka, ime_kompanije: ime_kompanije })
        if (user){
            return {
                // TOKEN KREDITNE KARTICE
                datum_isteka: user.datum_isteka,
                ime_kompanije: user.lokacija_prihvata,
            }
        }
        else {
            throw new Error("Error")
        }
    },
    async confirmPaymentCash(mjesto_poslovnice) {  
        let db = await connect()
        let cash = await db.collection('payment').findOne({ mjesto_poslovnice: mjesto_poslovnice })
        if (cash){
            return {
                mjesto_poslovnice: cash.mjesto_poslovnice
            }
        }
        else {
            throw new Error("Error")
        }
    },
};
