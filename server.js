var express= require('express');
var app=express();
var bodyParser= require('body-parser');
var fs= require('fs');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.get('/',(req,resp)=>{
    resp.render('index');
});
app.get('/galerie',(req,resp)=>{
    resp.render('galerie');
    });
app.get('/inscription',(req,resp)=>{
        resp.render('inscription');
});
app.get('/reservation',(req,resp)=>{
                resp.render('reservation');
 });
app.listen(3300);