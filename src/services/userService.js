const userRepository = require("../repositories/userRepository");
const bcrypt = require('bcrypt');
const throwCustomError = require("../utils/throwCustomError");
const passwordJwt = require('../passwordJwt');
const jwt = require('jsonwebtoken');

const createUser = async (name, email, password) => {
  if (!name || !email || !password)
    throwCustomError("Preencha todos os campos obrigatórios.", 400);

  const users = await userRepository.selectUserByEmail(email);

  if (users.length > 0)
    throwCustomError("Já existe usuário cadastrado com o e-mail informado.",400);

  const encryptedPassword = await bcrypt.hash(password, 10);

  return await userRepository.insertUser(name, email, encryptedPassword);
};

const updateUser = async (name, email, password, id) => {

  if (!name || !email || !password)
    throwCustomError("Preencha todos os campos obrigatórios.", 400);

  const users = await userRepository.selectUserById(id);

  if(users.length < 1)
    throwCustomError("O usuário não foi encontrado", 404);
  
    const isEmailDifferent = email !== users[0].email;
    const userFound = users.length > 0;

  if( isEmailDifferent && userFound)
    throwCustomError("O usuário não pode ser editado", 400);

  const encryptedPassword = await bcrypt.hash(password, 10);

  return await userRepository.updateUser(name, email, encryptedPassword, id);
};

const loginUser = async (email, password) => {

  if(!email || !password)
    throwCustomError("Preencha todos os campos obrigatórios.", 400);

  const users = await userRepository.selectUserByEmail(email);
  

  if(!users)
    throwCustomError("O usuário não foi encontrado", 404);
    
  const correctPassword = await bcrypt.compare(password, users.password);

  if(!correctPassword)
    throwCustomError("O email ou senha informados estão incorretos", 400);

  const token = jwt.sign({id: users.id}, passwordJwt, {expiresIn: '8h'});

  const { password: userPassword, ...user} = users;

  return {
    user,
    token
  }
};


module.exports = {
  createUser,
  updateUser,
  loginUser
};
