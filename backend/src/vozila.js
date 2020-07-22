import connect from './db';

//  STEPS: vozila.js  -> index.js(backend)  -> index.js(services) -> Vue datoteke

export default {
    async vehicleList(chooseVehicle) {
        let db = await connect();
        let doc = {
            sasija: chooseVehicle.sasija,
            ime: chooseVehicle.ime,
            model: chooseVehicle.model,
            klasa: chooseVehicle.klasa,
            godina_proizvodnje: chooseVehicle.godina_proizvodnje,
            boja: chooseVehicle.boja,
            snaga: chooseVehicle.snaga,
            vrata: chooseVehicle.vrata,
            cijena: chooseVehicle.cijena,
        };
        try {
            // .findOne() ili .find() ili getOne umisto insertOne()
            // https://docs.mongodb.com/manual/reference/method/db.collection.findOne/
            let result = await db.collection('vehicles')./*findOne*/insertOne(doc); // POGLEDAT KASNIJE KAKO SE ZOVE KOLEKCIJA U BAZI
            if (result && result.insertedId) {
                return result.insertedId;
            }
        } catch (e) {
            // PROVJERIT ERROR CODE
            if (e.name == 'MongoError' && e.code == 11000){
                // VOZILO SE NE NALAZI U BAZI
                throw new Error('Ovi podaci su već uneseni')
            }
        }
    }
};
