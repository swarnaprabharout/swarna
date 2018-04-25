var express=require('express');
var app=express();
var hbs=require('hbs');
app.set('view engine','hbs');
hbs.registerPartials(__dirname +'/views/partials');
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.send("hiii");

})

app.get('/about',(req,res)=>{
    res.render('about.hbs');

})
app.listen(3000);