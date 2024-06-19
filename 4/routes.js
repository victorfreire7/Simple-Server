
const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController') //pego tudo que esta sendo exportado de homeController
const contatoController = require('./src/controllers/contatoController') //pego tudo que esta sendo exportado de homeController


routes.get('/', homeController.paginaInicial); //uso a funçao que foi exportada
routes.post('/', homeController.trataPost);

routes.get('/contato', contatoController.paginaInicial) //busca o que esta na pagina 'contato controller' agora.


module.exports = routes; //exporto todas as routes/rotas
