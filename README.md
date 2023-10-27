![](https://i.imgur.com/xG74tOh.png)

# Desafio Módulo 5 - Backend


## Descrição do desafio

O objetivo da atividade foi desenvolver uma API para um PDV (Frente de Caixa). A aplicação conta com diversas funcionalidades, permitindo criar usuários, logar no perfil usuário para realizar atualizações e consultas, cadastrar, atualizar e excluir produtos e realizar pedidos. O sistema possui autenticação JWT e criptografia através do Bcrypt, upload de imagens no cadastro de produtos e usa o Query Builder [Knex](https://knexjs.org/). O deploy do projeto foi feito na [Cyclic](https://www.cyclic.sh/).

O desafio foi realizado simulando um cenário real de entrega de software, usando a metologia ágil Scrum e ferramentas como Kanban. Por isso, o product backlog foi dividido em 3 sprints, como será apresentado abaixo.   

## Deploy
https://cautious-garters-hare.cyclic.cloud

## Tecnologias Utilizadas
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Como executar o projeto
:warning: Para a execução do projeto, é necessário ter o [Node.js](https://nodejs.org/en) instalado em sua máquina.


1) Faça um clone do projeto
```bash
git clone https://github.com/LeticiaFerreiraLima/desafio-backend-m05-b2bt05.git
```
2) Abra o diretório do projeto
```bash
cd desafio-backend-m05-b2bt05
```
3) Instale as dependências utilizando o comando:
```bash
npm i
```

| Dependências | Versão |
|:----------|------|
|Express| 4.18.2|
|Nodemon  | 3.0.1 |
|PG  | 8.11.3 |
|Json Web Token | 9.0.2 |
|Bcrypt  | 5.1.1 |
|aws-sdk | 2.1482.0 |
|cors | 2.8.5 |
|dotenv | 16.3.1 |
|knex | 3.0.1 |
|multer | 1.4.5-lts.1 |
|nodemailer | 6.9.7 |

4) Inicialize o servidor local: 
```bash
npm run dev
```
Para verificar as rotas, deve ser usada uma plataforma de API's, como Postman ou Insomnia. 

## **Status Codes**

Abaixo, listamos os possíveis **_status codes_** esperados como resposta da API.

```javascript
// 200 (OK) = requisição bem sucedida
// 201 (Created) = requisição bem sucedida e algo foi criado
// 204 (No Content) = requisição bem sucedida, sem conteúdo no corpo da resposta
// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado
// 500 (Internal Server Error) = erro inesperado do servidor
```

<details>
<summary>1ª Sprint</summary>
<br>

<details>
<summary><b>Banco de Dados</b></summary>
<br>

Crie as seguintes tabelas e colunas abaixo:

**ATENÇÃO! Os nomes das tabelas e das colunas a serem criados devem seguir exatamente os nomes listados abaixo.**

- usuarios
  - id
  - nome
  - email (campo único)
  - senha
- categorias
  - id
  - descricao

</details>

<details>
<summary><b>Listar categorias</b></summary>

#### `GET` `/categoria`

Essa é a rota que será chamada quando o usuário quiser listar todas as categorias cadastradas.

As categorias a seguir precisam ser previamente cadastradas para que sejam listadas no endpoint de listagem das categorias.

## **Categorias**

- Informática
- Celulares
- Beleza e Perfumaria
- Mercado
- Livros e Papelaria
- Brinquedos
- Moda
- Bebê
- Games

</details>

<details>
<summary><b>Cadastrar usuário</b></summary>

#### `POST` `/usuario`

Essa é a rota que será utilizada para cadastrar um novo usuário no sistema.

Critérios de aceite:

    - Validar os campos obrigatórios:
        - nome
        - email
        - senha
    - A senha deve ser criptografada utilizando algum algoritmo de criptografia confiável.
    - O campo e-mail no banco de dados deve ser único para cada registro, não permitindo dois usuários possuírem o mesmo e-mail.

</details>

<details>
<summary><b>Efetuar login do usuário</b></summary>

#### `POST` `/login`

Essa é a rota que permite o usuário cadastrado realizar o login no sistema.

Critérios de aceite:

    - Validar se o e-mail e a senha estão corretos para o usuário em questão.
    - Gerar um token de autenticação para o usuário.

</details>

---

## **ATENÇÃO**: Todas as funcionalidades (endpoints) a seguir, a partir desse ponto, deverão exigir o token de autenticação do usuário logado, recebendo no header com o formato Bearer Token. Portanto, em cada funcionalidade será necessário validar o token informado.

---

<details>
<summary><b>Detalhar perfil do usuário logado</b></summary>

#### `GET` `/usuario`

Essa é a rota que permite o usuário logado a visualizar os dados do seu próprio perfil, de acordo com a validação do token de autenticação.

</details>

<details>
<summary><b>Editar perfil do usuário logado</b></summary>

#### `PUT` `/usuario`

Essa é a rota que permite o usuário logado atualizar informações de seu próprio cadastro, de acordo com a validação do token de autenticação.

Critérios de aceite:

    - Validar os campos obrigatórios:
        - nome
        - email
        - senha
    - A senha deve ser criptografada utilizando algum algoritmo de criptografia confiável.
    - O campo e-mail no banco de dados deve ser único para cada registro, não permitindo dois usuários possuírem o mesmo e-mail.

</details>

<details>
<summary><b>Efetuar deploy da aplicação</b></summary>
<br>

Fazer deploy do projeto e disponibilizar a URL.

</details>

</details>

---

<details>
<summary>2ª Sprint</summary>
<br>

<details>
<summary><b>Banco de Dados</b></summary>
<br>

Crie as seguintes tabelas e colunas abaixo:

**ATENÇÃO! Os nomes das tabelas e das colunas a serem criados devem seguir exatamente os nomes listados abaixo.**

- produtos
  - id
  - descricao
  - quantidade_estoque
  - valor
  - categoria_id
- clientes
  - id
  - nome
  - email (campo único)
  - cpf (campo único)
  - cep
  - rua
  - numero
  - bairro
  - cidade
  - estado

</details>

---

## **ATENÇÃO**: Todas as funcionalidades (endpoints) a seguir, a partir desse ponto, deverão exigir o token de autenticação do usuário logado, recebendo no header com o formato Bearer Token. Portanto, em cada funcionalidade será necessário validar o token informado.

---

<details>
<summary><b>Cadastrar Produto</b></summary>

#### `POST` `/produto`

Essa é a rota que permite o usuário logado cadastrar um novo produto no sistema.

Critérios de aceite:

    -   Validar os campos obrigatórios:
        -   descricao
        -   quantidade_estoque
        -   valor
        -   categoria_id
    -   A categoria informada na qual o produto será vinculado deverá existir.

</details>

<details>
<summary><b>Editar dados do produto</b></summary>

#### `PUT` `/produto/:id`

Essa é a rota que permite o usuário logado a atualizar as informações de um produto cadastrado.

Critérios de aceite:

    -   Validar se existe produto para o id enviado como parâmetro na rota.
    -   Validar os campos obrigatórios:
        -   descricao
        -   quantidade_estoque
        -   valor
        -   categoria_id
    -   A categoria informada na qual o produto será vinculado deverá existir.

</details>

<details>
<summary><b>Listar Produtos</b></summary>

#### `GET` `/produto`

Essa é a rota que será chamada quando o usuário logado quiser listar todos os produtos cadastrados.

Deveremos incluir um parâmetro do tipo query **categoria_id** para que seja possível consultar produtos por categorias, de modo, que serão filtrados de acordo com o id de uma categoria.

Critérios de aceite:

    - Caso seja enviado o parâmetro do tipo query **categoria_id**, filtrar os produtos de acordo com a categoria, caso o id de categoria informada exista.
    - Caso não seja informado o parâmetro do tipo query **categoria_id** todos os produtos cadastrados deverão ser retornados.

</details>

<details>
<summary><b>Detalhar Produto</b></summary>

#### `GET` `/produto/:id`

Essa é a rota que permite o usuário logado obter um de seus produtos cadastrados.

Critérios de aceite:

    -   Validar se existe produto para o id enviado como parâmetro na rota.

</details>

<details>
<summary><b>Excluir Produto por ID</b></summary>

#### `DELETE` `/produto/:id`

Essa é a rota que será chamada quando o usuário logado quiser excluir um de seus produtos cadastrados.

Critérios de aceite:

    -   Validar se existe produto para o id enviado como parâmetro na rota.

</details>

<details>
<summary><b>Cadastrar Cliente</b></summary>

#### `POST` `/cliente`

Essa é a rota que permite usuário logado cadastrar um novo cliente no sistema.

Critérios de aceite:

    -   Validar os campos obrigatórios:
        -   nome
        -   email
        -   cpf
    -   O campo e-mail no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo e-mail.
    -   O campo cpf no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo cpf.

</details>

<details>
<summary><b>Editar dados do cliente</b></summary>

#### `PUT` `/cliente/:id`

Essa é a rota que permite o usuário realizar atualização de um cliente cadastrado.

Critérios de aceite:

    -   Validar se existe cliente para o id enviado como parâmetro na rota.
    -   Validar os campos obrigatórios:
        -   nome
        -   email
        -   cpf
    -   O campo e-mail no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo e-mail.
    -   O campo cpf no banco de dados deve ser único para cada registro, não permitindo dois clientes possuírem o mesmo cpf.

</details>

<details>
<summary><b>Listar Clientes</b></summary>

#### `GET` `/cliente`

Essa é a rota que será chamada quando o usuário logado quiser listar todos os clientes cadastrados.

</details>

<details>
<summary><b>Detalhar Cliente</b></summary>

#### `GET` `/cliente/:id`

Essa é a rota que será chamada quando o usuário logado quiser obter um de seus clientes cadastrados.

Critérios de aceite:

    -   Validar se existe cliente para o id enviado como parâmetro na rota.

</details>

</details>

---

<details>
<summary>3ª Sprint</summary>
<br>

<details>
<summary><b>Banco de Dados</b></summary>
<br>

Crie as seguintes tabelas e colunas abaixo: 

**ATENÇÃO! Os nomes das tabelas e das colunas a serem criados devem seguir exatamente os nomes listados abaixo.**

-   pedidos
    -   id
    -   cliente_id
    -   observacao
    -   valor_total
-   pedido_produtos
    -   id
    -   pedido_id
    -   produto_id
    -   quantidade_produto
    -   valor_produto
-   produtos
    -   produto_imagem
</details>

---

## **ATENÇÃO**: Todas as funcionalidades (endpoints) a seguir, a partir desse ponto, deverão exigir o token de autenticação do usuário logado, recebendo no header com o formato Bearer Token. Portanto, em cada funcionalidade será necessário validar o token informado.

---

<details>
<summary><b>Cadastrar Pedido</b></summary>

#### `POST` `/pedido`

Essa é a rota que será utilizada para cadastrar um novo pedido no sistema.

**Lembre-se:** Cada pedido deverá conter ao menos um produto vinculado.

**Atenção:** As propriedades produto_id e quantidade_produto devem ser informadas dentro de um array e para cada produto deverá ser criado um objeto neste array, como ilustrado no objeto de requisição abaixo.
Só deverá ser cadastrado o pedido caso todos produtos vinculados ao pedido realmente existão no banco de dados.

```javascript
// Corpo da requisição para cadastro de pedido (body)
{
    "cliente_id": 1,
    "observacao": "Em caso de ausência recomendo deixar com algum vizinho",
    "pedido_produtos": [
        {
            "produto_id": 1,
            "quantidade_produto": 10
        },
        {
            "produto_id": 2,
            "quantidade_produto": 20
        }
    ]
}
```

Critérios de aceite:

    -   Validar os campos obrigatórios:
        -   cliente_id
        -   pedido_produtos
            -   produto_id
            -   quantidade_produto
    -   Validar se existe cliente para o id enviado no corpo (body) da requisição.
    -   Validar se existe produto para cada produto_id informado dentro do array enviado no corpo (body) da requisição.
    -   Validar se existe a quantidade em estoque de cada produto existente dentro do array, de acordo com a quantidade informada no corpo (body) da requisição.
    -   O pedido deverá ser cadastrado, apenas, se todos os produtos estiverem validados. 
    -   Enviar e-mail para o cliente notificando que o pedido foi efetuado com sucesso.   

</details>

<details>
<summary><b>Listar Pedidos</b></summary>

#### `GET` `/pedido`

Essa é a rota que será chamada quando o usuário logado quiser listar todos os pedidos cadastrados.

Deveremos incluir um parâmetro do tipo query **cliente_id** para que seja possível consultar pedidos por clientes, de modo, que serão filtrados de acordo com o id de um cliente.

```javascript
// Resposta para listagem de pedido (body)
[
    {
        "pedido": {
            "id": 1,
            "valor_total": 230010,
            "observacao": null,
            "cliente_id": 1
        },
        "pedido_produtos": [
            {
                "id": 1,
                "quantidade_produto": 1,
                "valor_produto": 10,
                "pedido_id": 1,
                "produto_id": 1
            },
            {
                "id": 2,
                "quantidade_produto": 2,
                "valor_produto": 230000,
                "pedido_id": 1,
                "produto_id": 2
            }
        ]
    }
]
```

Critérios de aceite:

    - Caso seja enviado o parâmetro do tipo query **cliente_id**, filtrar os pedidos de acordo com o cliente, caso o id do cliente informado exista.
    - Caso não seja informado o parâmetro do tipo query **cliente_id** todos os pedidos cadastrados deverão ser retornados.

</details>

<details>
<summary><b>Aplicar validação na exclusão de produto</b></summary>
<br>

Deverá ser aplicada uma regra de negócio que não permitirá exclusão de produto que tenha sido registrado em algum pedido.

Critérios de aceite:

    - Validar se o produto que está sendo excluído não está vinculado a nenhum pedido, caso estiver, não poderá ser excluído e deverá ser retornada uma mensagem indicando o motivo.

</details>

<details>
<summary><b>Aprimorar cadastro/atualização de produto</b></summary>
<br>

Deverão ser aprimorados o cadastro e a atualização de produto para permitir vincular uma imagem a um produto. 
Deverá ser criada uma coluna `produto_imagem` para que seja possível efetuar o vínculo entre a imagem e o produto.

Critérios de aceite:
    
    - O campo `produto_imagem` deve ser opcional, mas, em caso de ser enviado no corpo da requisição deveremos processar a imagem vinculada a essa propriedade e armazenar a imagem em um servidor de armazenamento (Supabase, Blackblaze, etc...)
    - Armazenar na coluna `produto_imagem` a URL que possibilita visualizar a imagem que foi efetuada upload para o servidor de armazenamento.

**Lembre-se:** A URL retornada deve ser válida, ou seja, ao ser clicada deve possibilitar visualizar a imagem que foi feito upload.

**ATENÇÃO:** Abaixo segue o exemplo de uma URL fictícia, mas que no caso, ilustra o que o serviço de armazenamento do Blackblaze retornaria após upload efetuado com sucesso, portanto essa seria no caso a URL que armazaremos na coluna `produto_imagem` no banco de dados.

```javascript
// Resposta cadastro/atualização de produto (body)
{
    "descricao": "Motorola moto g9 plus",
    "quantidade_estoque": 100,
    "valor": 15000,
    "categoria_id": 2,
    "produto_imagem": "https://s3.us-east-005.backblazeb2.com/desafio-final.jpg"
}
```

</details>

<details>
<summary><b>Aprimorar exclusão de produto</b></summary>
<br>

Deverá ser aprimorada a exclusão de produto para que quando o produto for excluído também seja removida a imagem vinculada a ele na servidor de armazenamento.

Critérios de aceite:

    - Na exclusão do produto a imagem vinculada a este produto deverá ser excluída do servidor de armazenamento.
    
</details>

</details>
