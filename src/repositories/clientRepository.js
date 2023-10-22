const knex = require('../database/connection');

const insertClient = async (name, email, cpf, adress) => {
    const newClient = await knex('clients').insert({
        name,
        email,
        cpf,
        adress
    }).returning('*');

    return newClient;
};

const selectClientByEmail = async (email) => {
    const client = await knex('clients').where('email', email).first();
    
    return client;
};

const selectClientByCpf = async (cpf) => {
    const client = await knex('clients').where('cpf', cpf).first();

    return client;
};

const getClients = async () => {
    const clients = await knex('clients');

    return clients;
};

const selectClientById = async (id) => {
    const client = await knex('clients').where('id', id).first();

    return client;
};

const updateClient = async (name, email, cpf, adress, id) => {
        const clientUpdated = await knex('clients').where('id', id).update({
            name,
            email,
            cpf,
            adress
        });
    
        return clientUpdated;
};


module.exports = {
    insertClient,
    selectClientByEmail,
    selectClientByCpf,
    getClients,
    selectClientById,
    updateClient
}