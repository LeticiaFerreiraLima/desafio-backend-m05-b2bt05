require('dotenv').config();
const express = require('express');
const router = require('./src/routers/router');
const app = express();

app.use(express.json());
app.use(router);

const serverPort = process.env.SERVER_PORT;

app.listen(serverPort, () => {
    console.log('Servidor conectado');
});