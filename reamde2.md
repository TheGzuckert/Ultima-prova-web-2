# API de Usuários com Node.js e Express.js

Este é um servidor simples que implementa operações CRUD para a entidade `Usuario` usando Node.js e Express.js.

## Como executar

### Instale as dependências:

npm install
Execute o servidor:

node app.js
O servidor estará rodando em http://localhost:3000.

Rotas disponíveis:

GET /users
Retorna todos os usuários cadastrados.

### Exemplo de Requisição:

GET http://localhost:3000/users
Exemplo de Resposta:

[
  {
    "id": "1",
    "nome": "John Doe",
    "data_nascimento": "1990-01-01",
    "email": "john@example.com"
  },
  {
    "id": "2",
    "nome": "Jane Doe",
    "data_nascimento": "1985-05-15",
    "email": "jane@example.com"
  }
]

GET /users/:id
Retorna um usuário específico pelo ID.

### Exemplo de Requisição:

GET http://localhost:3000/users/167b01b8c-6299-4c44-8417-5280b07e4fk

### Exemplo de Resposta:

[
  {
    "id": "67b01b8c-6299-4c44-8417-5280b07e4f1a",
    "nome": "aaa aaa",
    "data_nascimento": "1990-01-01",
    "email": "asdf@example.com"
  },
  {
    "id": "e7bf252a-4e3c-44d0-bc54-5568a34216ec",
    "nome": "sss ssss",
    "data_nascimento": "1985-05-15",
    "email": "asd@example.com"
  }
]

### Exemplo de Resposta:

{
  "id": "67b01b8c-6299-4c44-8417-5280b07e4fk",
  "nome": "New User",
  "data_nascimento": "2000-02-20",
  "email": "new@example.com"
}

PUT /users/:id
Atualiza um usuário existente pelo ID.

### Exemplo de Requisição:

PUT http://localhost:3000/users/167b01b8c-6299-4c44-8417-5280b07e4fk
Content-Type: application/json

{
  "nome": "John Doe Updated",
  "data_nascimento": "1990-01-01",
  "email": "john@example.com"
}

### Exemplo de Resposta:
{
  "message": "User updated successfully"
}

DELETE /users/:id
Exclui um usuário pelo ID.

### Exemplo de Requisição:

DELETE http://localhost:3000/users/67b01b8c-6299-4c44-8417-5280b07e4fk

### Exemplo de Resposta:

{
  "message": "User deleted successfully"
}
