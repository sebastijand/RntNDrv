import dotenv from 'dotenv'; 
dotenv.config();

import express from 'express';
import data from './store';
import cors from 'cors';
import connect from './db';
import mongo from 'mongodb';
import auth from './auth';
import placanje from './placanje';
import datum_najma from './datum_najma';
import ugovor from './ugovor';

const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

app.get('/tajna', [auth.verify], async (req, res) => {
    res.json({ message: "Ovo je tajna " + req.jwt.username });
})

// AUTHENTIFIKACIJA, PROVJERAVA I STVARA NOVI TOKEN:
app.post('/auth', async (req, res) => {
    let user = req.body;
    try {
        let result = await auth.authenticateUser(user.username, user.password, user.adresa, user.grad, user.osiguranje, user.vozacka_dozvola, user.kontakt_tel);
        //let result = await auth.authenticateUser(user.username, user.password); // predaje se username i password koji su došli sa forntenda
        res.json(result);
    }
    catch (e) {
        res.status(401).json({ error: e.message }); 
    }
});
 
// RUTA '/users' PREKO KOJE SE UNOSI KORISNIK, POZVIA SE "auth.registerUser" IZ 'auth.js'  
app.post('/users', async (req, res) => {
    let user = req.body;
    let id;
    try {
        id = await auth.registerUser(user);  // povezuje se "id" sa "auth.registerUser()" iz "auth.js" datoteke
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ id: id }); // ispisuju se van podaci objekta id (npr u postmanu) kada se korisnik unese u mongo bazu 
});
/*
PROFILE
app.patch('/user', [auth.verify], async (req, res) => {
    let changes = req.body;
    if (changes.new_password && changes.old_password) {
        let result = await auth.changeUserPassword(req.jwt.username, changes.old_password, changes.new_password);
        if (result) {
            res.status(201).send();
        } else {
            res.status(500).json({ error: 'cannot change password' });
        }
    } else {
        res.status(400).json({ error: 'unrecognized request' });
    }
});*/


// MOŽDA KORISTIT 'auth' RUTU UMISTO 'users'
// OVO VJEROJATNO NE VALJA
/*
app.patch('/auth/:id', async (req, res) => {
    let update = req.body;
    delete update._id;
    let id = req.params.id;
    let db = await connect();

    let result = await db.collection('users').updateOne(
        { _id: mongo.ObjectId(id) },
        {
            $set: update,
        }
    );
    if (result.modifiedCount == 1) {
        res.json({
            status: 'success',
            id: result.insertedId,
        });
    } else {
        res.status(500).json({
            status: 'fail',
        });
    }
});*/




//"id" nije potreban za usera
// https://www.youtube.com/watch?v=3yJkI2EKLvU
/*app.patch('/users', [auth.verify], async (req, res) => {
    let changes = req.body;
    let username = req.jwt.username;
    if (changes) {
        let result = await auth.changeProfileInfo(username, changes.n_adresa, changes.n_grad, changes.n_osiguranje, changes.n_vozacka_dozvola, changes.n_kontakt_tel);
        if (result) {
            res.status(201).send();
        } else {
            res.status(500).json({ error: 'došlo je do greške' });
        }
    } else {
        res.status(400).json({ error: 'krivi upit' });
    }
});*/


app.patch('/users', [auth.verify], async (req, res) => {
    let changes = req.body;
    let username = req.jwt.username
    if (changes.new_password && changes.old_password) {
        let result = await auth.changeUserPassword(username, changes.old_password, changes.new_password);
        if (result) {
            res.status(201).send();
        } else {
            res.status(500).json({ error: 'cannot change password' });
        }
    } else {
        res.status(400).json({ error: 'unrecognized request' });
    }
});



























//TESTIRAT INFORMACIJE I PROFIL KORISNIKA PREKO app.get!!!!!!!!!!!!VAŽNO!!!!!!!!!!!!!!!!!!!!!!!

// promjenit 'korisnici' sa 'users'
/*app.get('/users/:id', async (req, res) => {
    let db = await connect()
    let komarac = req.params.id;

    let cursor = await db.collection('users').findOne({
        _id: mongo.ObjectId(komarac)
    })
    let result = await cursor.toArray()

    console.log("Prikaz korisnika: ", result)
    res.json(result)
})*/


// NAČINI PLAĆANJA
/*app.post('/payments', async (req, res) => {
    let payment = req.body;
    let payment_id;
    try{
        payment_id = await placanje.registerPayment(payment);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ payment_id: payment_id })
});*/

// UNOS PODATAKA -> KREDITNA KARTICA
app.post('/payments', async (req, res) => {
    let payment = req.body;
    let payment_id;
    try{
        payment_id = await placanje.registerCredit(payment);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ payment_id: payment_id })
});
// UNOS PODATAKA -> GOTOVINA
app.post('/payments', async (req, res) => {
    let payment = req.body;
    let payment_id;
    try{
        payment_id = await placanje.registerCash(payment);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ payment_id: payment_id })
});


// VERIFIKACIJA PLAĆANJA KREDITNOM KARTICOM
app.post('/paymentcredit', async (req, res) => {
    let cred = req.body; 
    try {
        // let result = await auth.authenticateUser(user.username, user.password, user.kontakt_tel);
        let result = await placanje.confirmPayment(cred.br_kartice, cred.datum_isteka, cred.ime_kompanije);
        res.json(result);
    }
    catch (e) {
        res.status(401).json({ error: e.message }); 
    }
});

// VERIFIKACIJA PLAĆANJA GOTOVINOM
app.post('/paymentscash', async (req, res) => {
    let cash = req.body;
    try {
        // let result = await auth.authenticateUser(user.username, user.password, user.kontakt_tel);
        let result = await placanje.confirmPaymentCash(cash.mjesto_poslovnice);
        res.json(result);
    }
    catch (e) {
        res.status(401).json({ error: e.message }); 
    }
});

// TRAJANJE NAJMA 
app.post('/durations', async (req, res) => {
    let duration = req.body;
    let duration_id
    try{
        duration_id = await datum_najma.registerDuration(duration);
        //res.json(duration_id)
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({duration_id: duration_id})
});

// VERIFIKACIJA TRAJANJA NAJMA
app.post('/duration', async (req, res) => {
    let dur = req.body;
    try {
        // let result = await auth.authenticateUser(user.username, user.password, user.kontakt_tel);
        let result = await datum_najma.confirmDuration(dur.pocetak_iznajmljivanja, dur.lokacija_prihvata, dur.kraj_iznajmljivanja);
        res.json(result);
    }
    catch (e) {
        res.status(401).json({ error: e.message }); 
    }
});

/*
app.get('/durations/:id', async (req, res) => {
    let duration1, duration2, duration3 = req.body;
    let duration_xdddd;
    try{
        duration_xdddd = await datum_najma.getDuration(duration1, duration2, duration3);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    //console.log("Prikaz vozila: ", duration_xdddd)
    res.json({duration_xdddd: duration_xdddd})
    //let db = await connect() // spajamo se na bazu
    //let document = req.params.id;
    //let cursor = await db.collection('rentDuration').findOne({ _id: mongo.ObjectId(document) })
    //console.log("Prikaz jednog perioda: ", cursor)
    //res.json(cursor)
});*/

// IDK, MOŽDA IZBRISAT?!?!??!!!!!!!??!?!?!??!?!?!?!?!?!?!??!
app.get('/durations', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('rentDuration').find()
    let result = await cursor.toArray()
    console.log("Prikaz više perioda: ", result)
    res.json(result)
})

// VOZILA ĆE SE VUĆ IZ BAZE I ISPISIVAT ĆE SE NA FRONTENDU
// app.get('/vozilo'/*/vozilo/:sasija*/, async (req, res) => {
app.get('/vozilo/:sasija', async (req, res) => {
    let db = await connect()
    //let sasija = JSON.parse(req.body.sasija);
    let sasija_vozila = req.params.sasija;
    
    let cursor = await db.collection('vehicles').findOne({
        _id: mongo.ObjectId(sasija_vozila)/*}, function(error,doc) {
            if (error) {
              callback(error);
            } else {
               callback(null, doc);
            }*/
    })
    //let cursor = await db.collection('vehicles').find().sort({sasija: -1})
    //let result = await cursor.toArray()
    console.log("Prikaz vozila: ", cursor)
    res.json(cursor)

    /*

    UBACIT GORNJI DIO U "vozila.js" I NE ZABORAVIT KOMENTARE

    let vozilo = req.body;
    let vozilo_id;
    try{
        vozilo_id = await vozila.vechicleList(vozilililili);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ vozilo_id : vozilo_id })
    */
})

// TRAŽI VOZILA GDJE JE KLASA = "SEDAN"

app.get('/vozilo1', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('vehicles').find({ klasa: 'Sedan' })
    let result = await cursor.toArray()
    console.log("Prikaz vozila: ", result)
    res.json(result)
})

// TRAŽI VOZILA GDJE JE KLASA = "MINI"

app.get('/vozilo2', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('vehicles').find({ klasa: 'Mini' })
    let result = await cursor.toArray()
    console.log("Prikaz vozila: ", result)
    res.json(result)
})

// TRAŽI VOZILA GDJE JE KLASA = "KOMBI"

app.get('/vozilo3', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('vehicles').find({ klasa: 'Kombi' })
    let result = await cursor.toArray()
    console.log("Prikaz vozila: ", result)
    res.json(result)
})

// TRAŽI VOZILA GDJE JE KLASA = "KOMPAKT"

app.get('/vozilo4', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('vehicles').find({ klasa: 'Kompakt' })
    let result = await cursor.toArray()
    console.log("Prikaz vozila: ", result)
    res.json(result)
})

// TRAŽI VOZILA GDJE JE KLASA = "SKUTER"

app.get('/vozilo5', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('vehicles').find({ klasa: 'Skuter' })
    let result = await cursor.toArray()
    console.log("Prikaz vozila: ", result)
    res.json(result)
})

// TRAŽI VOZILA GDJE JE KLASA = "PREMIUM"

app.get('/vozilo6', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('vehicles').find({ klasa: 'Premium' })
    let result = await cursor.toArray()
    console.log("Prikaz vozila: ", result)
    res.json(result)
})

/*
// korisnik:
app.get('/korisnici', (req, res) => res.json(data.korisnici)); 
app.get('/korisnici/:oib', (req, res) => res.json(data.jedan_korisnik)); 

// unos novog korisnika: (postavljeno iznad, treba riješit i testirat)
//app.post('/korisnici', (req, res) => {
//    res.statusCode = 201;
//    res.setHeader('Location', '/korisnici/1234');  
//    res.send();
//});

// vozilo:
app.get('/vozilo', (req, res) => res.json(data.vozilo)); 
app.get('/vozilo/:sasija', (req, res) => res.json(data.jedno_vozilo)); 

// unos novog vozila: 
app.post('/vozilo', (req, res) => {
    res.statusCode = 201;
    res.setHeader('Location', '/vozilo/12312312312123123');  
    res.send();
});
*/

// ugovori: 
/*
app.get('/ugovori', (req, res) => res.json(data.ugovori));
app.get('/ugovori/:id', (req, res) => res.json(data.jedan_ugovor));

// stvaranje novog ugovora:
*/

app.post('/ugovor', async (req, res) => {
    let vhc = req.body;
    let vhc_id;
    try{
        vhc_id = await ugovor.contractVehicle(vhc);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ vhc_id: vhc_id })
    /*res.statusCode = 201;
    res.setHeader('Location', '/ugovori/1');
    res.send();*/
});

app.get('/ugovor', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('contract')
    let result = await cursor.toArray()
    console.log("Prikaz dodanog vozila u ugovor: ", result)
    res.json(result)
})



app.listen(port, () => console.log(`Slušam na portu ${port}!`));
