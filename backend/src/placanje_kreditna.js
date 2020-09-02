import mongo from 'mongodb';
import connect from './db';
import bcrypt from "bcrypt";  
//import jwt from "jsonwebtoken";     


export default {    
    async registerCredit(userPaymentCredit) {  
        let db = await connect();
        let doc = { 
            br_kartice: await bcrypt.hash(userPaymentCredit.br_kartice, 10), // userPayment.br_kartice,
            datum_isteka: userPaymentCredit.datum_isteka,
            ime_kompanije: userPaymentCredit.ime_kompanije,
        };
        try {
            // let result = await db.collection('contract').insertOne(doc);
            let result = await db.collection('paymentcredit').insertOne(doc);
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
        let user = await db.collection('paymentcredit').findOne({ datum_isteka: datum_isteka, ime_kompanije: ime_kompanije })
        if (user){
            return {
                // TOKEN KREDITNE KARTICE
                datum_isteka: user.datum_isteka,
                ime_kompanije: user.ime_kompanije,
            }
        }
        else {
            throw new Error("Error")
        }
    },
};
