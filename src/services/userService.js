const userRepository = require("../repositories/userRepository");
const bcrypt = require('bcrypt');
const throwCustomError = require("../utils/throwCustomError");

const createUser = async (name, email, password) => {
  if (!name || !email || !password)
    throwCustomError("Preencha todos os campos obrigatórios.", 400);

  const users = await userRepository.selectUserByEmail(email);

  if (users.length > 0)
    throwCustomError("Já existe usuário cadastrado com o e-mail informado.",400);

  const encryptedPassword = await bcrypt.hash(password, 10);

  return await userRepository.insertUser(name, email, encryptedPassword);
};

module.exports = {
  createUser,
};
