### Avaliação de Desenvolvimento Web 2 (WEB2)

### Questão 1

O programa em questão é capaz de gerar certificados .pem que podem ser ultilizados para gerar chaves publicas e privadas para criptografia de dados. Podem ser ultilizados em servidores web para criptografar dados enviados ao servidor, ou para criptografar dados enviados pelo servidor ao cliente.

No caso no lugar onde trabalho ultilizamos arquivos com o formato .PEM em um software chamado LockerStudio, que tem toda criptografia do banco de dados PostgreSQL. E sem esse arquivo o software não funciona.

### Questão 2



### Questão 3

Começamos importando as bibliotecas necessarias para o funcionamento do programa

```js
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;
```

Definimos a lista de usuários como um array vazio e criamos um middleware para o body-parser

```js
app.use(bodyParser.json());

let users = [];
```

Criamos a rota /users que retorna a lista de usuários

```js
app.get('/users', (req, res) => {
  res.json(users);
});
```

Criamos a rota /users/:id que retorna o usuário com o id especificado

```js
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
```

Em seguida criamos a rota Post /users que cria um novo usuário e o adiciona a lista de usuários

```js
app.post('/users', (req, res) => {
  const { nome, data_nascimento, email } = req.body;
  if (!nome || !data_nascimento || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newUser = {
    id: uuidv4(),
    nome,
    data_nascimento,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});
```

O metodo Put atualiza um usuário com o id espcifico

```js
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updateUser = req.body;

  users = users.map(u => (u.id === userId ? { ...u, ...updateUser } : u));
  res.json({ message: 'User updated successfully' });
});
```

O meotodo delete exclui um usuário com o id especifico

```js
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  users = users.filter(u => u.id !== userId);
  res.json({ message: 'User deleted successfully' });
});
```

Por fim iniciamos o servidor na porta 3000

```js
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### Rotas

Para testar as rotas ultilizei o Insomnia:

PUT:
ATUALIZA USUARIO
http://localhost:3000/users/6286457e-2ce4-4b7a-a31e-cbf30b1ebfd7

GET: - LISTA USUARIOS
http://localhost:3000/users

POST: - CRIA USUARIO
http://localhost:3000/users

DEL: - DELETA USUARIO
http://localhost:3000/users/3578f7d8-8c37-427d-9a03-db76ac23d089

Exeplo de criação:

````json

	{
		"id": "3578f7d8-8c37-427d-9a03-db76ac23d089",
		"nome": "Guilherme",
		"data_nascimento": "2023-02-10",
		"email": "exemplo.email@gmail.com"
	}

```











