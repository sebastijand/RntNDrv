import mongo from 'mongodb';
import connect from './db';     

export default {
    // UNOS PODATAKA U NAŠU MONGODB BAZU
    async registerDuration(userDuration) { 
        let db = await connect();
        let doc = {
            pocetak_iznajmljivanja: userDuration.pocetak_iznajmljivanja,
            lokacija_prihvata: userDuration.lokacija_prihvata,
            kraj_iznajmljivanja: userDuration.kraj_iznajmljivanja, 
            kontakt_tel: userDuration.kontakt_tel, 
            odabrano_vozilo: userDuration.odabrano_vozilo
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

    async confirmDuration(pocetak_iznajmljivanja, lokacija_prihvata, kraj_iznajmljivanja/*, kontakt_tel, odabrano_vozilo*/) {  
        let db = await connect()
        let user = await db.collection('rentDuration').findOne({ 
            pocetak_iznajmljivanja: pocetak_iznajmljivanja, 
            lokacija_prihvata: lokacija_prihvata, 
            kraj_iznajmljivanja: kraj_iznajmljivanja, 
            /*kontakt_tel: kontakt_tel, 
            odabrano_vozilo: odabrano_vozilo*/
        })
        
        if (user){
            return {
                pocetak_iznajmljivanja: user.pocetak_iznajmljivanja,
                lokacija_prihvata: user.lokacija_prihvata,
                kraj_iznajmljivanja: user.kraj_iznajmljivanja,
               /*kontakt_tel: user.kontakt_tel, 
                odabrano_vozilo: user.odabrano_vozilo*/
            }
        }
        else {
            throw new Error("Greška")
        }
    },
};