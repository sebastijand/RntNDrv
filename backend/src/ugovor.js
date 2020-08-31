import connect from './db';  


export default {
  // UNOS PODATAKA U NAŠU MONGODB BAZU
  async contractVehicle(vehicle) {  
    let db = await connect();
    let doc = {
      sasija: vehicle.sasija,
      ime: vehicle.ime,
      model: vehicle.model,
      klasa: vehicle.klasa,
      //godina_proizvodnje: vehicle.godina_proizvodnje,
      //boja: vehicle.boja,
      //snaga: vehicle.snaga,
      //vrata: vehicle.vrata,
      //cijena: vehicle.cijena,
      //logo: vehicle.logo    
    };
    try {
      let result = await db.collection('contract').insertOne(doc);
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