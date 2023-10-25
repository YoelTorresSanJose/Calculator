require('dotenv').config();
require('better-logging')(console);

const express = require('express');
const app = express();
const server = require('http').Server(app);
const fs = require('fs');
const path = require('path'); // Agregamos el módulo 'path'

app.set('view engine', 'ejs');

// Ruta para agregar un registro al historial
app.post('/data/HistorialUrl', (req, res) => {
  try {
    const registro = req.body;

    // Utilizamos 'path' para construir la ruta al archivo historial.json
    const filePath = path.join(__dirname, 'data', 'historial.json');

    // Leemos el archivo historial.json
    const historialJSON = fs.readFileSync(filePath, 'utf8');
    let historial = JSON.parse(historialJSON);

    // Agregamos el nuevo registro al historial
    historial.push(registro);

    // Escribimos el historial actualizado en el archivo
    fs.writeFileSync(filePath, JSON.stringify(historial, null, 2), 'utf8');

    res.status(200).send({ message: 'Registro guardado con éxito' });
  } catch (error) {
    console.error('Error al guardar el registro:', error);
    res.status(500).send({ message: 'Error al guardar el registro' });
  }
});
app.get('/', (req, res) => {
  res.render('calculator');
});
// Encendemos el servidor
server.listen(process.env.PORT, () => {
  console.info(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
