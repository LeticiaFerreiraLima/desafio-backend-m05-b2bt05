require('dotenv').config();
const knex = require('knex')({
	client: 'pg',
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME
	}
});

module.exports = knex;