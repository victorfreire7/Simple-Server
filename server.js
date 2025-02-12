const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'))

app.set('views', './src/views');
app.set('view engine', 'ejs'); //poder adicionar o JS no arquivo html, / index.ejs


app.use(routes); 

//mantemos o .listen aqui apenas para criar o servidor na porta
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});