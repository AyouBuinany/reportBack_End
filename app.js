const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/home.html'))
})
app.get('/Accueil', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/home.html'))
})
app.get('/se-connecter', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/login.html'))
})
app.get('/inscription', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/inscription.html'))
})
app.get('/Recuperer', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/forget_pass.html'))
})
app.get('/page1', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/page1.ejs'))
    res.redirect('/departement');
});
app.get('/services', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/services.html'))
})
app.get('/logout', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/html/home.html'))
})
app.post('/se-connecter', (req, res) => {
    let utilisateur = {
        Cin: req.body.cin,
        Prenom: req.body.firstName,
        Nom: req.body.lastName,
        Email: req.body.email,
        Telephone: req.body.phonNum,
        password: req.body.registrationPass,
        Birthday: req.body.birthdate,
    }
    fs.appendFileSync('./data/user-data.json', JSON.stringify(utilisateur))

    res.redirect("/se-connecter");
})
app.post('/services', (req, res) => {
    let qestion = {
        Nom: req.body.name,
        Email: req.body.email,
        Subject: req.body.subject,
        Message: req.body.message,
    }
    fs.appendFileSync('./data/qestions.json', JSON.stringify(qestion))

    res.redirect("/se-connecter");
})

app.set('view engine','ejs');
var list=[];
app.get('/departement',(req,resp)=>{
    var wd=fs.readFileSync('./data/departement.json');
list=JSON.parse(wd);
resp.render('pages/Page1',{entreprise:list});
});
// Ajouter Département  //
app.post('/d',(req,resp)=>{
    list.push({"nom":req.body.nom,"id":list.length +1,"chef_département":req.body.chef_département,"description":req.body.description});
fs.writeFile('./data/departement.json',JSON.stringify(list,null,5),(err)=>{
    console.log(err);
});
resp.redirect('/departement');
});

app.listen(3320, function () {
    console.log('runing....')
})