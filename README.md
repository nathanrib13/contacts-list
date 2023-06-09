# Contacts List Back-end

Essa sao as principais configuraçpes para o backend do aplicativo Contacts List, que gerencia uma lista de contatos de usuários.

## Configuração

### Variáveis de ambiente

Certifique-se de criar um arquivo `.env` na raiz do projeto e configure as seguintes variáveis de ambiente:

```shell
DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<database>
```

### Instalação

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Execute o seguinte comando para instalar as dependências:

```shell
npm install
```

## Executando o aplicativo

Certifique-se de ter um servidor PostgreSQL em execução e atualize a variável DATABASE_URL em .env com as configurações corretas.
Execute o seguinte comando para iniciar o servidor:

```shell
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## Rotas

- **/login**

  - **POST /login**: Rota para autenticar um usuário. Requer um corpo de requisição JSON contendo as credenciais de login.

- **/users**

  - **POST /users**: Rota para criar um novo usuário. Requer um corpo de requisição JSON contendo os dados do usuário a ser criado.
  - **GET /users**: Rota para obter informações do usuário logado. Requer autenticação JWT.
  - **PATCH /users/:id**: Rota para atualizar as informações de um usuário existente. Requer autenticação JWT e um corpo de requisição JSON contendo os dados atualizados.
  - **DELETE /users/:id**: Rota para excluir um usuário existente. Requer autenticação JWT.

- **/contacts**
  - **POST /contacts/:id**: Rota para criar um novo contato para um usuário com base no ID do usuario. Requer autenticação JWT e um corpo de requisição JSON contendo os dados do contato a ser criado.
  - **GET /contacts/:id**: Rota para obter informações de um contato específico. Requer autenticação JWT.
  - **PATCH /contacts/:id**: Rota para atualizar as informações de um contato existente. Requer autenticação JWT e um corpo de requisição JSON contendo os dados atualizados.
  - **DELETE /contacts/:id**: Rota para excluir um contato existente. Requer autenticação JWT.

## Dependências principais

- **express**: Framework web para o Node.js.
- **typeorm**: ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados.
- **bcryptjs**: Biblioteca para criptografar senhas.
- **jsonwebtoken**: Biblioteca para autenticação JWT (JSON Web Tokens).

# Contacts List Front-end

Essa sao as principais configuraçpes para o frontend da aplicação, desenvolvido usando React e TypeScript.

### Instalação

Execute o seguinte comando para instalar as dependências:

```shell
npm install
```

### Dependências principais

- React
- React Router DOM
- Styled Components
- Axios

### Scripts disponíveis

- `dev`: Executa o aplicativo em modo de desenvolvimento.
- `build`: Compila o aplicativo para produção.
- `lint`: Executa o linter para verificar problemas no código.
- `preview`: Inicia um servidor para visualização do aplicativo compilado.

### Arquivos principais

- `App.tsx`: Componente raiz do aplicativo. Configura os provedores de contexto e define as rotas principais.
- `main.tsx`: Arquivo de entrada do aplicativo. Renderiza o componente App e envolve-o com o BrowserRouter.
- `RoutesMain.tsx`: Componente que define as rotas da aplicação usando o React Router DOM.

### Configuração do serviço

O serviço de comunicação com a API é definido no arquivo `service.ts` utilizando a biblioteca Axios. O `baseURL` da API está configurado como `http://localhost:3000/`.

Para executar o aplicativo, certifique-se de ter as dependências instaladas e execute o seguinte comando:

```shell
npm run dev
```
