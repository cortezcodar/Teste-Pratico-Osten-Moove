# Gerenciador de Ferramentas

O **Gerenciador de Ferramentas** é uma aplicação web simples para gerenciar ferramentas. Ele oferece várias funcionalidades para ajudar a controlar o estado, a disponibilidade e a reserva de ferramentas. Abaixo estão as principais funcionalidades implementadas no projeto.

## Funcionalidades Principais

### Listagem de Ferramentas

A aplicação exibe uma lista de ferramentas, mostrando as seguintes informações para cada uma:

- **Nome**: O nome da ferramenta.
- **Status**: O status da ferramenta, que pode ser "Disponível," "Reservada" ou "Indisponível."
- **Data e Hora de Coleta**: A data e hora em que a ferramenta foi coletada.
- **Data e Hora de Devolução**: A data e hora em que a ferramenta deve ser devolvida.

### Adição de Novas Ferramentas

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

## Como Usar

Siga as instruções abaixo para começar a usar o **Gerenciador de Ferramentas**:

1. Clone este repositório: `git clone https://github.com/seu-usuario/gerenciador-de-ferramentas.git`
2. Navegue até o diretório do aplicativo: `cd gerenciador-de-ferramentas`
3. Instale as dependências: `npm install`
4. Inicie o aplicativo: `npm start`
5. Abra o aplicativo em seu navegador em `http://localhost:3000`

