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

const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

app.get('/tajna', [auth.verify], async (req, res) => {
    res.json({ message: "Ovo je tajna " + req.jwt.username });
})

//AUTHENTIFIKACIJA, PROVJERAVA I STVARA NOVI TOKEN:
app.post('/auth', async (req, res) => {
    let user = req.body;

    try {
        let result = await auth.authenticateUser(user.username, user.password); // predaje se username i password koji su došli sa forntenda
        res.json(result);
    }
    catch (e) {
        res.status(401).json({ error: e.message }); 
    }
});
 
//RUTA '/users' PREKO KOJE SE UNOSI KORISNIK, POZVIA SE "auth.registerUser" IZ 'auth.js'  
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

    //res.json(user);
});

// NAČINI PLAĆANJA
app.post('/payments', async (req, res) => {
    let payment = req.body;
    let payment_id;
    try{
        payment_id = await placanje.registerPayment(payment);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ payment_id: payment_id })
});

// TRAJANJE NAJMA 
app.post('/durations', async (req, res) => {
    let duration = req.body;
    let duration_id;
    try{
        duration_id = await datum_najma.registerDuration(duration);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
    res.json({ duration_id : duration_id })
});


/*

app.get('/korisnici', async (req, res) => {
    let db = await connect()

    let cursor = await db.collection('users').find().sort({oib: -1})
    let result = await cursor.toArray()

    console.log("Prikaz korisnika: ", result)
    res.json(result)
})
*/

/*
// VOZILA ĆE SE VUĆ IZ BAZE I ISPISIVAT ĆE SE NA FRONTENDU
app.get('/vozilo', async (req, res) => {
    let db = await connect()

    let cursor = await db.collection('vehicles').find().sort({sasija: -1})
    let result = await cursor.toArray()

    console.log("Prikaz vozila: ", result)
    res.json(result)
})*/

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

// ugovori: 

app.get('/ugovori', (req, res) => res.json(data.ugovori));
app.get('/ugovori/:id', (req, res) => res.json(data.jedan_ugovor));

// stvaranje novog ugovora:

app.post('/ugovori', (req, res) => {
    res.statusCode = 201;
    res.setHeader('Location', '/ugovori/1');
    res.send();
});
*/


app.listen(port, () => console.log(`Slušam na portu ${port}!`));
