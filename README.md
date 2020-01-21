# Overview React

Pré-requisitos
- conhecimento JS
- NodeJs
- Yarn
- Mysql

## Conceitos basicos
- Components:
    são functions que retornam elementos renderizados no DOM 
- State:
    são variaveis que podem ser reutilizadas em um component
- Props:
    são propriedades transferidas de components pais para components filhos

## Conceitos utils
- Fragment:
    permite agrupar multiplos components sem adição extas no DOM
- immutable
    consiste em nao alterar um state, mais sim criar um novo valor para esse state

## Criando app React
```javascript
yarn create react-app front
npx create-react-app front
```

# Start

- Criar um novo banco de dados chamado pizzaria
- Importar o banco `pizzaria.sql` da para `server`

## Rodar app
Server
```javascript
cd /server
yarn start
```
Front

```javascript
cd /front
yarn start
```

## Schema GraphQL

```graphQl
type Categorias {
    id: ID!
    name: String! 
    sabores: [Sabores]
}

type Sabores {
    id: ID!
    name: String! 
    ingredientes: String!
    categoriaId: Int!
    categoria: Categorias
}
```

## Querys

```javascript
export const GET_CATEGORIAS = "{categorias{ name sabores{ name ingredientes }}}"
export const GET_SABORES = "{sabores{ name ingredientes categoria{ name }}}"

export const ADD_CATEGORIA = 'mutation ($name: String!) { addCategorias(name: $name){ id name }}';
export const ADD_SABORES = 'mutation ($name: String!, $ingredientes: String!, $categoriaId: Int!) { addSabores(name: $name, ingredientes: $ingredientes, categoriaId: $categoriaId){ id name ingredientes }}';

export const UPDATE_CATEGORIA = 'mutation ($id: ID!,$name: String!) { updateCategoria(id: $id, name: $name){ id name }}';
export const UPDATE_SABORES = 'mutation ($id: ID!, $name: String!, $ingredientes: String!, $categoriaId: Int!) { updateSabor(id: $id, name: $name, ingredientes: $ingredientes, categoriaId: $categoriaId){ id name ingredientes categoriaId }}';

export const DELETE_CATEGORIA = 'mutation ($id: ID!) { deleteCategoria(id: $id) }'
export const DELETE_SABORES = 'mutation ($id: ID!) { deleteSabor(id: $id) }'
```

# Bibliotecas

- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [GraphQL](https://github.com/prisma-labs/graphql-yoga)
- [Axios](https://github.com/axios/axios)





emmet react
ctrl+shift+p
```javascript
open settings(json)
    "emmet.syntaxProfiles": {
        "javascript": "jsx",
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
    },
```