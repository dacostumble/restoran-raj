const express=require('express');
const server=express();
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');
const path=require('path');

//PORT:
const port=process.env.PORT || 3000;

const shema=mongoose.Schema;
async function povezi_pokreni(){
    try{
        await mongoose.connect(process.env.URI);
        server.listen(port, "0.0.0.0", ()=>{
            console.log('Server i baza su pokrenuti!');
        })
    }

    catch (error){
        throw error;
    }
}
povezi_pokreni();

const shemak=new shema({
    ime: String,
    kontakt: Number,
    adresa: String,
    poruka: String,
    korpa: Array,
    racun: Number,
    gotovo_stanje: Boolean
})

const shemas=new shema({
    stanje: Number
})

const recenzijas=new shema({
    ime: String,
    poruka: String,
})

const jelas=new shema({
    ime: String,
    dostupno: Boolean
})

const porudzbina=mongoose.model("porudzbina" , shemak);
const smena=mongoose.model("smena" , shemas);
const recenzija=mongoose.model("recenzija" , recenzijas);
const jela=mongoose.model("jela" , jelas);

//MIDDLWARE: raspakovanje json-a + cors

server.use(cors());
server.use(express.json());

//USLUZIVANJE SLIKA POSEBNO JER NECE PO FOLDERU:

server.get('/korpa.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "korpa.png")));

//RADIII!!
server.get('/HERO.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "HERO.png")));
server.get('/o_res_1.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "o_res_1.png")));
server.get('/zvezdica.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "zvezdica.png")));
server.get('/Cezar.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Cezar.png")));
server.get('/Slike/Grcka.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "Slike" , "Grcka.png")));
server.get('/Tuna.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Tuna.png")));
server.get('/Sopska.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "Sopska.png")));
server.get('/Grcka.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "Grcka.png")));
server.get('/Piletina.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "Piletina.png")));
server.get('/Losos.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "Losos.png")));
server.get('/Testenina.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Testenina.png")));
server.get('/Rizoto.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Rizoto.png")));
server.get('/Omlet.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "Omlet.png")));
server.get('/Ovsene.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Ovsene.png")));
server.get('/Tost.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Tost.png")));
server.get('/Palacinke.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Palacinke.png")));
server.get('/Med i orasi.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "Med i orasi.png")));
server.get('/Chia puding.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Chia puding.png")));
server.get('/Mafin.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "Mafin.png")));
server.get('/Energetske kuglice.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "Energetske kuglice.png")));
server.get('/banana.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "banana.png")));
server.get('/jagoda.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "jagoda.png")));
server.get('/zeleni.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "zeleni.png")));
server.get('/limunada.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "limunada.png")));
server.get('/kraj.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "kraj.png")));
server.get('/stani.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname , "stani.png")));
server.get('/kreni.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "kreni.png")));
server.get('/izmeni.png' , (zahtev, odg) => odg.sendFile(path.join(__dirname, "izmeni.png")));

//DEFINISANJE OSTALIH RUTI:

server.get('/', (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "index.html"));
});
server.get('/index.html' , (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "index.html"));
})
server.get('/stil.css', (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "stil.css"));
});
server.get('/korpa.html' , (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "korpa.html"));
})
server.get('/registracija.html' , (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "registracija.html"));
})
server.get('/gotovo.html' , (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "gotovo.html"));
})
server.get('/zvono.png' , (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "zvono.png"));
})
server.get('/licno.png' , (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "licno.png"));
})
server.get('/OCENA.png' , (zahtev, odg) => {
    odg.sendFile(path.join(__dirname, "OCENA.png"));
})

//NARUCIVANJE SA FRONT-END-a

server.post('/poruci' , async (zahtev, odg) => {
    const ime_prezime=zahtev.body.ime;
    const kontakt=zahtev.body.kontakt;
    const adresa=zahtev.body.adresa;
    const poruka=zahtev.body.poruka;
    const korpa=zahtev.body.korpa;
    const racun=zahtev.body.racun;
    const gotovo=zahtev.body.gotovo;

    try{
        await porudzbina.create({
            ime: ime_prezime,
            kontakt: kontakt,
            adresa: adresa,
            poruka: poruka,
            korpa: korpa,
            racun: racun,
            gotovo_stanje: gotovo
        })
    }

    catch(error){
        throw error;
    }
})

//CITANJE PORUDZBINA I ISPISIVANJE NA ADMIN PANELU:

server.get('/lista' , async (zahtev, odg) => {
    const lista_proizvoda = await porudzbina.find();

    odg.send(lista_proizvoda);
})

//VERIFIKACIJA ADMIN-a:

let verifikovan=0;

server.post('/adminReg', (zahtev, odg) => {
    const ime=zahtev.body.ime;
    const email=zahtev.body.email;
    const sifra=zahtev.body.sifra;

    if(ime==process.env.ADMIN_IME && email==process.env.ADMIN_EMAIL && sifra==process.env.ADMIN_SIFRA){
        odg.json('Verifikovan.');
        verifikovan=1;
    }

    else{
        odg.json('Nije verifikovan.');
    }
})

//ZASTITA ADMIN RUTE:

server.get('/admin_panel.html' , (zahtev, odg) => {
    if(verifikovan==1){
        odg.sendFile(path.join(__dirname, "admin_panel.html"));
    }
    else odg.send('<h1>Pristup odbijen! / Access Denied!</h1>');
})

//IZMENA STANJA PORUDZBINE AKO JE GOTOVA:

server.put('/gotovaPorudzbina' , async (zahtev, odg) => {
    const sifra=zahtev.body.sifra;

    try{
        await porudzbina.updateMany( //gpt: updateMany
            {kontakt: sifra},
            {gotovo_stanje: true}
        )
    }

    catch(error){
        throw error;
    } 
})

//BRISANJE PORUDZBINA(E):

server.post('/obrisi' , async (zahtev, odg) => {
    const kontakt_za_brisanje=zahtev.body.kontakt_za_brisanje;

    try{
        await porudzbina.deleteMany({kontakt: kontakt_za_brisanje});
    }
    
    catch(error){
        throw error;
    }
})

//KRAJ/POCETAK SMENE:

server.post('/kraj_smene' , async (zahtev, odg) => {
    try{
        await smena.findOneAndUpdate(
        {stanje: 1},
        {stanje: 0}
        )
        await porudzbina.deleteMany();

        odg.send(1);
    }
    
    catch (error){
        throw error;
    }
}) 

server.post('/pocetak_smene' , async (zahtev, odg) => {
    try{
        await smena.findOneAndUpdate(
            {stanje: 0},
            {stanje: 1}
        )

        odg.send(1);
    }
    
    catch (error){
        throw error;
    }
}) 

server.get('/info_smena' , async (zahtev, odg) => {
    let stanje_smena=await smena.find();

    odg.send(stanje_smena[0].stanje);
})

//FRONT-END PROVERAVA DA LI JE PORUDZBINA GOTOVA:

server.post('/info_porudzbina' , async (zahtev, odg) => {
    const sifra_porudzbine=zahtev.body.sifra_porudzbine;

    let t=await porudzbina.find(
        {kontakt: sifra_porudzbine, gotovo_stanje: true}
    )

    if(t.length>0) odg.send(1); //uslov gpt
        else odg.send(0);
})

//DODAVANJE RECENZIJE U BAZU + ISPIS RECENZIJA:
//ne prikazuj prazne recenzije!

server.post('/dodaj_recenziju' , async (zahtev, odg) => {
    const ime=zahtev.body.ime_rec;
    const poruka=zahtev.body.por_rec;

    try{
        await recenzija.create({
            ime: ime,
            poruka: poruka,
        })
    }
    
    catch(error){
        throw error;
    }
})

server.get('/lista_recenzija' , async (zahtev, odg) => {
    const lista_recenzija = await recenzija.find();

    odg.send(lista_recenzija);
})

//ADMIN PANEL MENJA DOSTUPNOST;

//citanje jela iz baze koja ima sva imena sa front enda
server.get('/admin_lista_jela' , async (zahtev, odg) => {
    try{
        const lista_jela = await jela.find();
        odg.send(lista_jela);
    }
    catch(error){
        throw error;
    }
})

//front end proverava dostupnost:
server.get('/proveri_dostupnost' , async(zahtev, odg) => {
    try{
        let lista_nedostupnih=await jela.find(
            {dostupno: false}
        );

        odg.send(lista_nedostupnih);
    }

    catch(error){
        throw error;
    }
})

//promena stanja
server.put('/promeni_na_dostupno' , async (zahtev, odg) => {
    const ime_jela=zahtev.body.ime;

    try{
        await jela.findOneAndDelete(
            {ime: ime_jela},
            {dostupno: true}
        )
    }

    catch(error){
        throw error;
    }

    odg.send(200);
})

server.put('/promeni_na_nedostupno' , async (zahtev, odg) => {
    const ime_jela=zahtev.body.ime;

    try{
        await jela.findOneAndDelete(
            {ime: ime_jela},
            {dostupno: false}
        )
    }

    catch(error){
        throw error;
    }

    odg.send(200);
})