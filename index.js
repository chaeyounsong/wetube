const express = require('express')
const app = express()

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req,res){
    console.log('req');
    res.send('hello. From home.');
}


function handleProfile(req,res){

    console.log('req');
    res.send('You are on my Profile.')
}

app.get("/profile",handleProfile);
app.get("/",handleHome);

app.listen(PORT, handleListening);