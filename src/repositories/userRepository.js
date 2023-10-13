const knex = require('../database/connection');

const insertUser = async (user) => {
    const newUser = knex('users').insert(user).returning('*'); 

    return newUser;
};

const selectUserByEmail = async (email) => {
    const userEmail = await knex('users').where('email', email).count();
    
    return userEmail;
};

module.exports = {
    selectUserByEmail,
    insertUser
};