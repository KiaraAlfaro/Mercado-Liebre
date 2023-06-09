const express = require ('express');
const path = require ('path');

const app = express ();
app.use(express.static(path.join(__dirname, '/public')));

app.get('/',(req,res)=> {

    res.sendFile((__dirname + '/views/index.html'));
});

app.get('/register', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/login', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});



app.listen(3002,function(){

    console.log("servidor corriendo");
});