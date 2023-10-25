
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const betterLogging = require('better-logging');

betterLogging(console);

const { renderView } = require('./src/helpers/renderView');

const app = express();
const server = http.Server(app);

app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    renderView(res, 'calculator');
});

app.get('/mostrarHistorial', (req, res) => {
    try {
        const historialData = fs.readFileSync('historial.json', 'utf-8');
        const historial = JSON.parse(historialData);
        res.json({ historial });
    } catch (error) {
        console.error('Error al cargar el historial:', error);
        res.status(500).json({ error: 'Error al cargar el historial' });
    }
});

app.post('/HistorialAdd', (req, res) => {
    console.log(req.body);
    let registro = req.body;

    let historial = [];
    try {
        const historialData = fs.readFileSync('historial.json', 'utf-8');
        historial = JSON.parse(historialData);
    } catch (err) {
        console.log('Error al leer el historial');
    }

    historial.push(registro);
    fs.writeFileSync('historial.json', JSON.stringify(historial, null, 2));
});

server.listen(process.env.PORT, () => {
    console.info(`Servidor corriendo en el puerto: http://localhost:${process.env.PORT}`);
});
