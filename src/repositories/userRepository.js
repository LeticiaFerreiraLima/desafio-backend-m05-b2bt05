const knex = require('../database/connection');

const insertUser = async (name, email, password) => {
    const newUser = await knex('users').insert({
        name,
        email,
        password
    }).returning('*'); 

    return newUser;
};

const selectUserByEmail = async (email) => {
    const users = await knex('users').where('email', email);
    
    return users;
};

module.exports = {
    selectUserByEmail,
    insertUser
};