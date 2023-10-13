require('dotenv').config();
const express = require('express');
const app = express();

const serverPort = process.env.SERVER_PORT;

app.listen(serverPort, () => {
    console.log('Servidor conectado');
});