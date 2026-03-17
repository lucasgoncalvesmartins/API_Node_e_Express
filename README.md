# API Node.js com Express, Prisma e MongoDB

Este projeto é uma API RESTful desenvolvida com Node.js, utilizando o framework Express para roteamento, Prisma ORM para interação com o banco de dados MongoDB e autenticação JWT para segurança das rotas.

## Funcionalidades

-   **Autenticação de Usuários:**
    -   Cadastro de novos usuários com senha criptografada (bcrypt).
    -   Login de usuários com geração de JSON Web Token (JWT) para acesso seguro.
-   **Gerenciamento de Usuários:**
    -   Listagem de todos os usuários cadastrados (rota protegida por JWT).

## Tecnologias Utilizadas

-   **Node.js:** Ambiente de execução JavaScript.
-   **Express.js:** Framework web para Node.js.
-   **Prisma ORM:** ORM moderno para Node.js e TypeScript, com suporte a MongoDB.
-   **MongoDB Atlas:** Banco de dados NoSQL em nuvem.
-   **bcrypt:** Biblioteca para criptografia de senhas.
-   **jsonwebtoken (JWT):** Para geração e verificação de tokens de autenticação.
-   **dotenv:** Para gerenciamento de variáveis de ambiente.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

-   [Node.js](https://nodejs.org/en/download/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/get-npm) ou [pnpm](https://pnpm.io/installation) (gerenciador de pacotes)
-   Uma conta no [MongoDB Atlas](https://cloud.mongodb.com/) para configurar seu banco de dados.

## Configuração do Projeto

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### 1. Clone o Repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd API_Node_e_Express
```

### 2. Instale as Dependências

```bash
npm install
# ou
pnpm install
```

### 3. Configuração do Banco de Dados (MongoDB Atlas)

1.  Crie um cluster no [MongoDB Atlas](https://cloud.mongodb.com/).
2.  Crie um **Database User** (ex: `lucas`) e defina uma senha forte (ex: `lucas123`).
3.  Configure o **Network Access** para permitir conexões de `0.0.0.0/0` (acesso de qualquer IP) ou adicione seu IP atual.
4.  Obtenha a **Connection String** do seu cluster (selecione a opção `Driver: Node.js` e a versão mais recente).

### 4. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL="mongodb+srv://<USUARIO>:<SENHA>@<SEU_CLUSTER>.mongodb.net/<NOME_DO_SEU_BANCO>?retryWrites=true&w=majority"
JWT_SECRET="<SUA_CHAVE_SECRETA_JWT>"
```

-   Substitua `<USUARIO>` e `<SENHA>` pelas credenciais do seu Database User.
-   Substitua `<SEU_CLUSTER>` pelo nome do seu cluster no MongoDB Atlas.
-   Substitua `<NOME_DO_SEU_BANCO>` pelo nome do banco de dados que você deseja usar (ex: `Users`).
-   `JWT_SECRET` deve ser uma string longa e aleatória para garantir a segurança dos seus tokens. Você pode gerar uma [aqui](https://www.grc.com/passwords.htm).

### 5. Gerar o Prisma Client

Após configurar o `.env` e o `schema.prisma`, gere o Prisma Client para que ele possa interagir com seu banco de dados:

```bash
npx prisma generate
```

## Como Rodar a Aplicação

Para iniciar o servidor em modo de desenvolvimento com `nodemon` (ou `node --watch`):

```bash
node --watch server.js
```

O servidor estará rodando em `http://localhost:3000`.

## Rotas da API

### Rotas Públicas (`public.js`)

-   **`POST /cadastro`**
    -   **Descrição:** Registra um novo usuário.
    -   **Corpo da Requisição (JSON):**
        ```json
        {
            "name": "Seu Nome",
            "email": "seu.email@example.com",
            "password": "sua_senha_segura"
        }
        ```
    -   **Resposta de Sucesso (201 Created):** Retorna os dados do usuário criado (sem a senha).

-   **`POST /login`**
    -   **Descrição:** Autentica um usuário e retorna um JWT.
    -   **Corpo da Requisição (JSON):**
        ```json
        {
            "email": "seu.email@example.com",
            "password": "sua_senha_segura"
        }
        ```
    -   **Resposta de Sucesso (200 OK):** Retorna um objeto contendo o token JWT e os dados do usuário.
        ```json
        {
            "message": "Login realizado com sucesso!",
            "token": "eyJhbGciOiJIUzI1Ni...",
            "user": {
                "id": "65f8a...",
                "name": "Seu Nome",
                "email": "seu.email@example.com"
            }
        }
        ```

### Rotas Privadas (`private.js`)

-   **`GET /listar-usuarios`**
    -   **Descrição:** Lista todos os usuários cadastrados no sistema.
    -   **Autenticação:** Requer um JWT válido no cabeçalho `Authorization` (formato `Bearer <token>`).
    -   **Resposta de Sucesso (200 OK):** Retorna uma lista de usuários (sem as senhas).

## Estrutura do Projeto

```
API_Node_e_Express/
├── .env.example
├── middlewares/
│   └── auth.js
├── prisma/
│   └── schema.prisma
├── routes/
│   ├── private.js
│   └── public.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Para isso, siga os passos:

1.  Faça um fork do repositório.
2.  Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3.  Faça suas alterações e commit (`git commit -m 'feat: adiciona nova funcionalidade'`).
4.  Envie para a branch (`git push origin feature/nova-funcionalidade`).
5.  Abra um Pull Request.


