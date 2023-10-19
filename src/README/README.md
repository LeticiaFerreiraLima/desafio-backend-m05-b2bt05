<div align="center">    
   <img width="200" src="./assets/cubos-academy-logo.png">
   <p>Cubos Academy</p>
 </div>

## 📗 Sobre
<p>Bem-vindos a API REST desenvolvida durante o 5º desafio do bootcamp de Node.js da Cubos Academy

Texto da API</p>

<br></br>

## ⌨️ Acesse a API

### A API está hospedada e você pode acessá-la por meio desse <a href="" target="_blank">[link](LNK AQUI)</a>.

<br></br>


## 📌 Execute o projeto
```bash
# Clone o repositório
$ git clone https://github.com/LeticiaFerreiraLima/desafio-backend-m05-b2bt05.git
```

```bash
# Instale as dependências
$ npm install
```

```bash
# Inicialize o projeto utilizando o banco de dados remoto
$ npm run dev
```
<br></br>

## 🔐 Routes

<p></p>
<p></p>

### Autenticação

| Método |    Endpoint    |     Descrição da Rota     | Status | Token |
| ------ | -------------  | --------------------------| ------ | ---------------| 
| POST    | /users/login  |  Autenticação do usuário  |   200  | <p align="center">❌</p>|

<p></p>
<p></p>

### Coleção de usuários

| Método |    Endpoint    |     Descrição da rota     | Status | Token |
| ------ | -------------  | --------------------------| ------ | ---------------| 
| POST   | /users         |  Criar novo usuário       |   201  | <p align="center">✔️</p>|  
| PUT    | /users/:id     |  Editar usuário por id    |   200  | <p align="center">✔️</p>|

<p></p>
<p></p>

### Coleção de categorias

| Método |    Endpoint    |     Descrição da rota     | Status | Token |
| ------ | -------------  | --------------------------| ------ | ---------------| 
| GET    | /categories    |  Listar categorias        |   200  | <p align="center">✔️</p>| 

<p></p>
<p></p>

### Coleção de Clientes

| Method |    Endpoint     |     Route Description     | Status | Token Required          |
| ------ | -------------   | --------------------------| ------ | ------------------------|
| POST   | /clients        |  Criar novo cliente       |   201  |<p align="center">✔️</p> |
| GET    | /clients        |  List todos os clientes   |   200  |<p align="center">✔️</p> |

<br></br>