const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
	host: 'localhost',
	port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME
});

pool.connect()
.then(() => {
    console.log('Banco de dados conectado');
})
.catch(() => {
    console.log('Erro ao conectar o banco de dados');
});

module.exports = pool;