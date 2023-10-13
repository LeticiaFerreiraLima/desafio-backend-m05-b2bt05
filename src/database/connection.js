require('dotenv').config();
const knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'localhost',
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME
	}
});

module.exports = knex;