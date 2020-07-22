/*import connect from './db';

//  STEPS: ugovori.js  -> index.js(backend)  -> index.js(services) -> Finalna potvrda.vue 


// https://www.w3schools.com/nodejs/nodejs_mongodb_join.asp
export default {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
};
*/