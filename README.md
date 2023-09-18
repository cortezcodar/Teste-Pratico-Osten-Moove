# Sistema de Reserva de Ferramentas

O projeto se baseia no desenvolvimento de um sistema de reserva de ferramentas para mecânicos. Este sistema é composto por um front-end e um back-end que trabalham juntos para permitir o gerenciamento de ferramentas e suas reservas.

## Funcionalidades

O sistema possui as seguintes funcionalidades:

- **Front-end:**
  - Listar ferramentas, mostrando seu status, data e hora de coleta, data e hora de devolução.
  - Adicionar novas ferramentas.
  - Atualizar o status de uma ferramenta.
  - Reservar uma ferramenta por um mecânico.
  - Solicitar confirmação para deletar uma ferramenta.

- **Back-end:**
  - Fornecer uma API RESTful para gerenciar as ferramentas.
  - Cada ferramenta possui um ID, nome, descrição, status, data e hora de coleta, data e hora de devolução e mecânico que reservou (se aplicável).
  - A API permite listar, obter detalhes, criar, atualizar, reservar e excluir ferramentas.

## Estrutura de Diretórios

O projeto está organizado da seguinte forma:


## Configuração

Para configurar e executar o projeto, siga estas etapas:

### Front-end

1. Navegue até o diretório `frontend`:

2. Instale as dependências:

3. Inicie o aplicativo front-end:

### Back-end

1. Navegue até o diretório `backend`:

2. Instale as dependências:

# Backend do Sistema de Reserva de Ferramentas

Este é o backend do Sistema de Reserva de Ferramentas, desenvolvido em Node.js, Express.js, MySQL, TypeScript e Sequelize.

## Tecnologias Principais

### Node.js

- **Descrição:** O Node.js é um ambiente de execução JavaScript que permite o desenvolvimento de aplicativos do lado do servidor.
- **Site Oficial:** [Node.js](https://nodejs.org/)

### Express.js

- **Descrição:** O Express.js é um framework web para Node.js que simplifica o desenvolvimento de aplicativos web e APIs RESTful.
- **Site Oficial:** [Express.js](https://expressjs.com/)

### MySQL

- **Descrição:** O MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto amplamente utilizado para armazenar dados estruturados.
- **Site Oficial:** [MySQL](https://www.mysql.com/)

### TypeScript

- **Descrição:** TypeScript é um superconjunto de JavaScript que adiciona tipagem estática ao JavaScript, tornando o código mais robusto e legível.
- **Site Oficial:** [TypeScript](https://www.typescriptlang.org/)

### Sequelize

- **Descrição:** Sequelize é um ORM (Object-Relational Mapping) para Node.js que simplifica o acesso e a manipulação de bancos de dados relacionais, como MySQL, usando objetos JavaScript.
- **Site Oficial:** [Sequelize](https://sequelize.org/)

## Configuração e Uso


Siga as instruções abaixo para começar a usar Ferramentas**:


Para rodar a aplicação, é necessário ter o Node.js e o MySQL instalados na máquina.

1. Clone o repositório do projeto:

git clone https://github.com/cortezcodar/Teste-Pratico-Osten-Moove.git


2. Acesse o diretório da API back-end:

`cd /backend`


3. Crie um banco de dados MySQL com o nome "" e configure as credenciais de acesso no arquivo `db/connection.ts`.

4. Instale as dependências da API back-end:

` npm install`

5. Inicie a API back-end:

6. Configure as variáveis de ambiente necessárias, como informações de conexão com o banco de dados.

3. Instale as dependências usando `npm install`.
4. Inicie o servidor usando `npm start`.

5. Abra o aplicativo em seu navegador em `http://localhost:3000`

 Acesse o diretório do front-end:

` cd ../frontend`

6. Instale as dependências do front-end:

` npm install`

7. Inicie front-end:

` npm start`
1. Clone este repositório.


## Endpoints da API

O back-end é uma API RESTful desenvolvida em Node.js, Express, TypeScript, MySQL e Sequelize. A API oferece os seguintes recursos:

### Endpoints da API

A API possui os seguintes endpoints principais:

#### `GET /ferramentas`

Este endpoint permite listar todas as ferramentas disponíveis no sistema.

**Entrada:**

Nenhum parâmetro é necessário para esta solicitação.

**Saída:**

- **Status 200 OK**: A solicitação foi bem-sucedida, e a resposta conterá uma lista de objetos de ferramentas, cada um representando uma ferramenta disponível no sistema.

- **Status 404 Not Found**: Não foram encontradas ferramentas no sistema.

**Exemplo de Resposta (200 OK):**

```json
[
  {
    "id": 1,
    "nome": "Chave de Fenda",
    "descricao": "Uma ferramenta para apertar ou soltar parafusos",
    "status": "Disponível",
    "coleta": null,
    "devolucao": null,
    "mecanico_reserva": null
  },
  {
    "id": 2,
    "nome": "Martelo",
    "descricao": "Uma ferramenta para bater em coisas",
    "status": "Reservado",
    "coleta": "2023-09-28T10:00:00Z",
    "devolucao": "2023-09-30T16:00:00Z",
    "mecanico_reserva": "João da Silva"
  }
]
```

Desculpe pela confusão. Aqui está o conteúdo completo em formato Markdown que você pode copiar e colar no seu arquivo README.md:

markdown
Copy code
# Sistema de Gerenciamento de Ferramentas

Este projeto é um sistema de gerenciamento de ferramentas para mecânicos, composto por um front-end e um back-end.

## Front-end

O front-end foi desenvolvido em React e permite:

- Listar as ferramentas, mostrando seu status, data e hora de coleta, data e hora de devolução, e opções para editar, reservar e deletar.
- Permitir adicionar novas ferramentas.
- Permitir atualizar o status de uma ferramenta.
- Permitir a reserva de uma ferramenta por um mecânico.
- Solicitar confirmação para deletar uma ferramenta.

Para mais detalhes sobre o front-end, consulte a [documentação do front-end](./frontend/README.md).

## Back-end

O back-end é uma API RESTful desenvolvida em Node.js, Express, TypeScript, MySQL e Sequelize. A API oferece os seguintes recursos:

### Endpoints da API

A API possui os seguintes endpoints principais:

#### `GET /ferramentas`

Este endpoint permite listar todas as ferramentas disponíveis no sistema.

**Entrada:**

Nenhum parâmetro é necessário para esta solicitação.

**Saída:**

- **Status 200 OK**: A solicitação foi bem-sucedida, e a resposta conterá uma lista de objetos de ferramentas, cada um representando uma ferramenta disponível no sistema.

- **Status 404 Not Found**: Não foram encontradas ferramentas no sistema.

**Exemplo de Resposta (200 OK):**

```json
[
  {
    "id": 1,
    "nome": "Chave de Fenda",
    "descricao": "Uma ferramenta para apertar ou soltar parafusos",
    "status": "Disponível",
    "coleta": null,
    "devolucao": null,
    "mecanico_reserva": null
  },
  {
    "id": 2,
    "nome": "Martelo",
    "descricao": "Uma ferramenta para bater em coisas",
    "status": "Reservado",
    "coleta": "2023-09-28T10:00:00Z",
    "devolucao": "2023-09-30T16:00:00Z",
    "mecanico_reserva": "João da Silva"
  }
]
```
#### POST /ferramentas
Este endpoint permite criar uma nova ferramenta no sistema.

**Entrada:**

Corpo da solicitação (JSON): Os detalhes da nova ferramenta a ser criada, incluindo o nome, descrição e status.
```json
{
  "nome": "Furadeira",
  "descricao": "Uma ferramenta para perfurar materiais",
  "status": "Disponível"
}
```
**Saída:**
**Status 201 Created:** A ferramenta foi criada com sucesso e a resposta conterá os detalhes da ferramenta recém-criada, incluindo o ID atribuído automaticamente.
```json
{
  "id": 3,
  "nome": "Furadeira",
  "descricao": "Uma ferramenta para perfurar materiais",
  "status": "Disponível",
  "coleta": null,
  "devolucao": null,
  "mecanico_reserva": null
}

```
#### PUT /ferramentas/:id
Este endpoint permite atualizar o status de uma ferramenta existente no sistema.

**Entrada:**

Parâmetros de URL: id - O ID da ferramenta a ser atualizada.

Corpo da solicitação (JSON): O novo status da ferramenta.
```json
{
  "status": "Reservado",
  "coleta": "2023-09-28T14:00:00Z",
  "devolucao": "2023-09-30T16:00:00Z",
  "mecanico_reserva": "Maria da Silva"
}


```

# Gerenciador de Ferramentas

O **Gerenciador de Ferramentas** é uma aplicação web simples para gerenciar ferramentas. Ele oferece várias funcionalidades para ajudar a controlar o estado, a disponibilidade e a reserva de ferramentas. Abaixo estão as principais funcionalidades implementadas no projeto.

## Funcionalidades Principais

### Listagem de Ferramentas

A aplicação exibe uma lista de ferramentas, mostrando as seguintes informações para cada uma:

- **Nome**: O nome da ferramenta.
- **Status**: O status da ferramenta, que pode ser "Disponível," "Reservada" ou "Indisponível."
- **Data e Hora de Coleta**: A data e hora em que a ferramenta foi coletada.
- **Data e Hora de Devolução**: A data e hora em que a ferramenta deve ser devolvida.

### cadastro de Novas Ferramentas

É possível adicionar novas ferramentas à lista. Para isso, acesse a funcionalidade "Adicionar Nova Ferramenta" e preencha os seguintes campos:

- **Nome**: Insira o nome da nova ferramenta.
- **Status**: Selecione o status inicial da ferramenta (Disponível, Reservada ou Indisponível).
- **Data e Hora de Coleta**: Escolha a data e hora em que a ferramenta foi coletada.
- **Data e Hora de Devolução**: Defina a data e hora de devolução da ferramenta.

Após preencher essas informações, clique em "Adicionar Ferramenta" para incluir a nova ferramenta na lista.

### Atualização de Status de Ferramenta

Você pode atualizar o status de uma ferramenta diretamente na lista. Basta clicar no botão "Editar" ao lado da ferramenta que deseja atualizar. Isso permitirá que você altere o status da ferramenta entre "Disponível," "Reservada" e "Indisponível." Após fazer a alteração desejada, clique em "Salvar" para confirmar a atualização.

### Reserva de Ferramenta

É possível reservar uma ferramenta diretamente na lista. Para isso, clique no botão "Reservar" ao lado da ferramenta que deseja reservar. Isso alterará o status da ferramenta para "Reservada." Se um mecânico reservou uma ferramenta, isso ficará registrado no status.

### Deleção de Ferramenta

Para excluir uma ferramenta, clique no botão "Deletar" ao lado da ferramenta que deseja remover. A aplicação solicitará confirmação antes de excluir a ferramenta. Isso ajuda a evitar a exclusão acidental.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **CSS**: Para estilização da interface do usuário.

