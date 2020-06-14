
let data = {
    korisnici: {
        data: [
            {
                oib: '84887392874',
                ime: 'Marko',
                prezime: 'Markić',
                adresa: 'Random adress 1A',
                grad: 'Pula',
                osiguranje: 'Euroherc',
                vozacka_dozvola: 'B',
                kontakt_tel: '0983451345',
                kontakt_email: 'mmarkic@gmail.com',
            },
        ],
    },
    jedan_korisnik: {
        data: {
            oib: '84887392874',
            ime: 'Marko',
            prezime: 'Markić',
            adresa: 'Random adress 1A',
            grad: 'Pula',
            osiguranje: 'Euroherc',
            vozacka_dozvola: 'B',
            kontakt_tel: '0983451345',
            kontakt_email: 'mmarkic@gmail.com',
        },
    },
    vozilo: {
        data: [
            {
                sasija: 'KIK372JFJ204POLL6',
                ime: 'Škoda',
                model: 'Octavia',
                klasa: 'Sedan',
                godina_proizvodnje: '2018',
                boja: 'Metalik Crna',
                snaga: '100',
                vrata: '5',
                cijena: '100',
            },
        ],
    },
    jedno_vozilo: {
        data: {
            sasija: 'KIK372JFJ204POLL6',
            ime: 'Škoda',
            model: 'Octavia',
            klasa: 'Sedan',
            godina_proizvodnje: '2018',
            boja: 'Metalik Crna',
            snaga: '100',
            vrata: '5',
            cijena: '100',
        },
    },
    najamVozila: {
        data: {
            vozilo: {
                sasija: 'KIK372JFJ204POLL6',
                ime: 'Škoda',
                model: 'Octavia',
                klasa: 'Sedan',
                godina_proizvodnje: '2018',
                boja: 'Metalik Crna',
                snaga: '100',
                vrata: '5',
                cijena: '100',
            },
            korisnik: {
                najam: true,
                oib: '84887392874',
                ime: 'Marko',
                prezime: 'Markić',
                adresa: 'Random adress 1A',
                grad: 'Pula',
                osiguranje: 'Euroherc',
                vozacka_dozvola: 'B',
                kontakt_tel: '0983451345',
                kontakt_email: 'mmarkic@gmail.com',
            },
        },
    },
    ugovori: {
        data: [
            {
                vozilo: {
                    sasija: 'KIK372JFJ204POLL6',
                    ime: 'Škoda',
                    model: 'Octavia',
                    klasa: 'Sedan',
                    godina_proizvodnje: '2018',
                    boja: 'Metalik Crna',
                    snaga: '100',
                    vrata: '5',
                    cijena: '100',
                },
                najam: true,
                korisnik: {
                    oib: '84887392874',
                    ime: 'Marko',
                    prezime: 'Markić',
                    adresa: 'Random adress 1A',
                    grad: 'Pula',
                    osiguranje: 'Euroherc',
                    vozacka_dozvola: 'B',
                    kontakt_tel: '0983451345',
                    kontakt_email: 'mmarkic@gmail.com',
                },
                datum: {
                    pocetak_iznajmljivanja: '10-07-2020',
                    kraj_iznajmljivanja: '24-07-2020',
                },
                plaćanje: {
                    nacin_placanja: 'gotovina',
                    mjesto_poslovnice: 'Random adresa poslovnice 3, Pula',
                    ime_kred_kompanije: '/',
                },
            },
        ],
    },
    jedan_ugovor: {
        data: 
            {
                vozilo: {
                    sasija: 'KIK372JFJ204POLL6',
                    ime: 'Škoda',
                    model: 'Octavia',
                    klasa: 'Sedan',
                    godina_proizvodnje: '2018',
                    boja: 'Metalik Crna',
                    snaga: '100',
                    vrata: '5',
                    cijena: '100',
                },
                najam: true,
                korisnik: {
                    oib: '84887392874',
                    ime: 'Marko',
                    prezime: 'Markić',
                    adresa: 'Random adress 1A',
                    grad: 'Pula',
                    osiguranje: 'Euroherc',
                    vozacka_dozvola: 'B',
                    kontakt_tel: '0983451345',
                    kontakt_email: 'mmarkic@gmail.com',
                },
                datum: {
                    pocetak_iznajmljivanja: '10-07-2020',
                    kraj_iznajmljivanja: '24-07-2020',
                },
                plaćanje: {
                    nacin_placanja: 'gotovina',
                    mjesto_poslovnice: 'Random adresa poslovnice 3, Pula',
                    ime_kred_kompanije: '/',
                },
            },

    },
    
};


export default data;
