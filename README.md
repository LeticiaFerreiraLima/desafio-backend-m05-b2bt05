
# Desafio Módulo 5 - Backend

## Descrição do desafio

Uma API para um PDV (Frente de Caixa).

- Listar categorias
- Cadastrar usuário
- Efetuar login
- Detalhar perfil
- Editar Perfil


## **Endpoints**

- HOST: https://cautious-garters-hare.cyclic.cloud

### **Listar categorias**

#### `GET` `/categories `

Essa é a rota que será chamada quando o usuário quiser listar todas as categorias cadastradas.

https://cautious-garters-hare.cyclic.cloud/categories

### **Cadastrar usuário**

#### `POST` `/usuario`

Essa é a rota que será utilizada para cadastrar um novo usuário no sistema.

https://cautious-garters-hare.cyclic.cloud/users

#### **Exemplo de requisição**

```javascript
//POST /users
{
    "name": "user2",
    "email": "user2@email.com",
    "password": "1111"
}
```


### **Login do usuário**

#### `POST` `/login`

Essa é a rota que permite o usuário cadastrado realizar o login no sistema.

https://cautious-garters-hare.cyclic.cloud/users/login

#### **Exemplo de requisição**

```javascript
//POST /users/login
{
    "email": "user2@email.com",
    "password": "1111"
}
```

### **Detalhar perfil**

#### `GET` `/usuario`

Essa é a rota que permite o usuário logado a visualizar os dados do seu próprio perfil, de acordo com a validação do token de autenticação.

https://cautious-garters-hare.cyclic.cloud/user

### **Editar perfil**

#### `PUT` `/usuario`

Essa é a rota que permite o usuário logado atualizar informações de seu próprio cadastro, de acordo com a validação do token de autenticação.

https://cautious-garters-hare.cyclic.cloud/users

#### **Exemplo de requisição**

```javascript
//POST /users
{
    "name": "user4",
    "email": "user2@email.com",
    "password": "1111"
}
```