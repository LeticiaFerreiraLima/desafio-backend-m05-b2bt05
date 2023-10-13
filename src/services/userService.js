const userRepository = require('../repositories/userRepository');
const throwCustomError = require('../utils/throwCustomError');

const createUser = async (name, email, password) => {
    if(!name || !email || !password)
        throwCustomError('Preencha todos os campos obrigatórios.', 400);

    const users = await userRepository.selectUserByEmail(email);

    if(users.length > 0)
        throwCustomError('Já existe usuário cadastrado com o e-mail informado.', 400);
};

module.exports = {
    createUser
}