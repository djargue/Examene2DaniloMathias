const express = require('express');
const cors = require("cors");
const app = express();


app.use(cors());
// Express middleware for parsing JSON
app.use(express.json());




const PORT = 3000;


app.get('/hola_mundo', (req, res) => {
  res.send('Esta es una prueba de respuesta del servidor, la respuesta es exitosa!');
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});