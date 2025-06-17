require('dotenv').config();
const express = require('express');
const app = express();

const API_KEY = process.env.API_KEY; 

//const extraVar = 'Esta variable ya no se usa, pero alguien olvidó borrarla!'
console.log(API_KEY)
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Solicitud recibida');
  res.send('API Insegura funcionando');
});


app.get('/secure-data', (req, res) => {
  const key = req.headers['x-api-key'];
  if (key !== API_KEY) {
    return res.status(403).json({ error: 'Acceso denegado' });
  }
  res.json({ secret: '12345' });
});

module.exports = app;

