const clientRepository = require("../repositories/clientRepository");
const throwCustomError = require("../utils/throwCustomError");

const createClient = async (name, email, cpf, adress) => {

  if (!name || !email || !cpf)
    throwCustomError("Preencha todos os campos obrigatórios.", 400);

  if(cpf.length < 11)
    throwCustomError("CPF deve conter 11 dígitos", 400);

  const clientByEmail = await clientRepository.selectClientByEmail(email);

  if (clientByEmail)
    throwCustomError("Já existe um cliente cadastrado com o e-mail informado.", 400);

  const clientByCpf = await clientRepository.selectClientByCpf(cpf);

  if(clientByCpf)
    throwCustomError("Já existe um cliente cadastrado com o cpf informado.", 400);

  return await clientRepository.insertClient(name, email, cpf, adress);
};

const getClients = async () => {
  const clients = await clientRepository.getClients();

  return clients;
};

const updateClient = async (name, email, cpf, adress, id) => {

  const clientExists = await clientRepository.selectClientById(id);

    if (!clientExists)
      throwCustomError("O cliente não foi encontrado", 404);

  if (!name || !email || !cpf)
    throwCustomError("Preencha todos os campos obrigatórios.", 400);

  const clientByEmail = await clientRepository.selectClientByEmail(email);

  if ((email !== clientExists.email && clientByEmail))
    throwCustomError("O email informado já está em uso", 400);

  if(cpf.length !== 11)
    throwCustomError("CPF deve conter 11 dígitos", 400);

    const clientByCpf = await clientRepository.selectClientByCpf(cpf);

    if((cpf !== clientExists.cpf && clientByCpf))
      throwCustomError("Já existe um cliente cadastrado com o cpf informado.", 400);
  
    return await clientRepository.updateClient(name, email, cpf, adress, id);
  };


module.exports = {
  createClient,
  getClients,
  updateClient
}