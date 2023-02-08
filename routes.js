const express = require('express');
const route = express.Router();


const home = require('./src/controllers/home');


route.get('/', home.pagInicialget);
route.post('/', home.pagInicialPost);

route.get('/tela-principal', home.TelaPrincipal);
// route.post('/principal', home.TelaPrincipal);


module.exports = route;
