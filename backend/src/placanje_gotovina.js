import mongo from 'mongodb';
import connect from './db';

export default {
    async registerCash(userPaymentCash) {  
        let db = await connect();
        let doc = {
            mjesto_poslovnice: userPaymentCash.mjesto_poslovnice,
        };
        try {
            let result = await db.collection('paymentcash').insertOne(doc);
            if (result && result.insertedId) {
                return result.insertedId;
            }
        } catch (e) {
            if (e.name == 'MongoError' && e.code == 11000){
                throw new Error('Ovi podaci su već uneseni')
            }
        }
    },
    async confirmPaymentCash(mjesto_poslovnice) {  
        let db = await connect()
        let cash = await db.collection('paymentcash').findOne({ mjesto_poslovnice: mjesto_poslovnice })
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