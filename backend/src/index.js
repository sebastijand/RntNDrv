import dotenv from 'dotenv'; 
dotenv.config();

import express from 'express';
import data from './store';
import cors from 'cors';
import connect from './db';
import mongo from 'mongodb';
import auth from './auth';
import placanje_kreditna from './placanje_kreditna';
import placanje_gotovina from './placanje_gotovina'
import datum_najma from './datum_najma';
//import ugovor from './ugovor';

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
        id = await auth.registerUser(user);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ id: id });
});

app.patch('/users', [auth.verify], async (req, res) => {
    let changes = req.body;
    let username = req.jwt.username;
    if (changes.n_adresa && changes.n_grad && changes.n_osiguranje && changes.n_vozacka_dozvola && changes.n_kontakt_tel) {
    //if (changes.n_adresa) {
        let result = await auth.changeProfileInfo(username, changes.n_adresa, changes.n_grad, changes.n_osiguranje, changes.n_vozacka_dozvola, changes.n_kontakt_tel);
        if (result) {
            res.status(201).send();
        } else {
            res.status(500).json({ error: 'došlo je do greške' });
        }
    } else {
        res.status(400).json({ error: 'krivi upit' });
    }
});

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

// UNOS PODATAKA -> KREDITNA KARTICA
app.post('/paymentcredit', async (req, res) => {
    let payment = req.body;
    let payment_id;
    try{
        payment_id = await placanje_kreditna.registerCredit(payment);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ payment_id: payment_id })
});

// VERIFIKACIJA PLAĆANJA KREDITNOM KARTICOM
app.post('/paymentcreditconfirm', async (req, res) => {
    let cred = req.body; 
    try {
        let result = await placanje_kreditna.confirmPayment(/*cred.br_kartice, */cred.datum_isteka, cred.ime_kompanije);
        res.json(result);
    }
    catch (e) {
        res.status(401).json({ error: e.message }); 
    }
});

// UNOS PODATAKA -> GOTOVINA
app.post('/paymentcash', async (req, res) => {
    let payment = req.body;
    let payment_id;
    try{
        payment_id = await placanje_gotovina.registerCash(payment);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ payment_id: payment_id })
});

// VERIFIKACIJA PLAĆANJA GOTOVINOM
app.post('/paymentcashconfirm', async (req, res) => {
    let novac = req.body;
    try {
        let result = await placanje_gotovina.confirmPaymentCash(novac.mjesto_poslovnice);
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
        let result = await datum_najma.confirmDuration(dur.pocetak_iznajmljivanja, dur.lokacija_prihvata, dur.kraj_iznajmljivanja/*, dur.kontakt_tel, dur.odabrano_vozilo*/);
        res.json(result);
    }
    catch (e) {
        res.status(401).json({ error: e.message }); 
    }
});


//app.get('/durations', async (req, res) => {
//  let db = await connect()
//    let cursor = await db.collection('rentDuration').find()
//    let result = await cursor.toArray()
//    console.log("Prikaz više perioda: ", result)
//    res.json(result)
//})

// VOZILA ĆE SE VUĆ IZ BAZE I ISPISIVAT ĆE SE NA FRONTENDU
app.get('/vozilo/:sasija', async (req, res) => {
    let db = await connect()
    let sasija_vozila = req.params.sasija;
    
    let cursor = await db.collection('vehicles').findOne({
        _id: mongo.ObjectId(sasija_vozila)
    })
    console.log("Prikaz vozila: ", cursor)
    res.json(cursor)
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
    //res.statusCode = 201;
    //res.setHeader('Location', '/ugovori/1');
    //res.send();
});

app.get('/ugovor', async (req, res) => {
    let db = await connect()
    let cursor = await db.collection('contract')
    let result = await cursor.toArray()
    console.log("Prikaz dodanog vozila u ugovor: ", result)
    res.json(result)
})
*/


app.listen(port, () => console.log(`Slušam na portu ${port}!`));
