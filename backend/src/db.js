import mongo from 'mongodb';

//let connection_string = 'mongodb+srv://admin:admin@nt-cluster-jmi8g.mongodb.net/fipugram?retryWrites=true&w=majority';
//let connection_string = 'mongodb://localhost:27017/fipugram';
let connection_string = 'mongodb+srv://admin:admin@cluster0-vntwt.mongodb.net/test?retryWrites=true&w=majority';

let client = new mongo.MongoClient(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


let db = null;

// eksportamo Promise koji resolva na konekciju
export default () => {
    return new Promise((resolve, reject) => {
        // ako smo inicijalizirali bazu i klijent je još uvijek spojen
        if (db && client.isConnected()) {
            resolve(db);
        } else {
            client.connect((err) => {
                if (err) {
                    reject('Spajanje na bazu nije uspjelo:' + err);
                } else {
                    console.log('Database connected successfully!');
                    db = client.db('rentanddrive');
                    resolve(db);
                }
            });
        }
    });
};

