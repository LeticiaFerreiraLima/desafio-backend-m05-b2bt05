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

const selectUserById = async (id) => {
    const users = await knex('users').where('id', id);
    
    return users;
}

const updateUser = async (name, email, password, id) => {
    const userUpdated = await knex('users').where('id', id).update({
        name,
        email,
        password
    });
    
    return userUpdated;
};

module.exports = {
    selectUserByEmail,
    insertUser,
    updateUser,
    selectUserById
};