var express = require('express');
var ejs = require('ejs')

var app = express();
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
// app.use(expressLayouts)
app.set('views', __dirname+"/templates")

var src = __dirname;

app.get('/', (req, res)=>{
    res.render("index");
})
app.get('/index', (req, res)=>{
    res.render("index");
})
app.get('/weather',(req, res)=>{
    res.render("weather");
})
app.get('/about',(req, res)=>{
    res.render('about')
})

app.get('/*', (req,res)=>{
    res.render("notfound");
})

app.get('/index/*', (req,res)=>{
    res.render("notfound");
})

app.get('/weather/*', (req,res)=>{
    res.render("notfound");
})

app.get('/about/*', (req,res)=>{
    res.render("notfound");
})

app.listen(8000);