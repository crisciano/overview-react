# Overview React

Pré-requisitos

- Conhecimento em JS
- NodeJS
- Yarn
- MySQL

## Conceitos básicos

- Components:
  são functions ou classes que retornam elementos renderizados no DOM
- State:
  são variáveis que podem ser reutilizadas em um component
- Props:
  são propriedades transferidas de components pais para components filhos

## Conceitos utils

- Fragment:
  permite agrupares múltiplos components sem adições extras no DOM
- Immutable
  consiste em não alterar um state, mas sim criar um novo a partir desse state

## Ciclo de vida

- `constructor(props)`: método chamado antes do component ser montado
  - Inicializa o state local do component
- `render()`: único método obrigatório, varre o state e props para renderizar um dos seguintes tipos
  - Elemento React em formato JSX
  - Arrays e fragmentos
  - Portals, que renderizam elementos filhos dentro do nó DOM do pai
  - String ou números em formato de texto
- `componentDidMount()`: método invocado imediatamente após um component ser montado
  - Utilizado para fazer chamadas para APIs e montar o state
- `componentDidUpdate(prevProps, prevState, snapshot)`: método invocado imediatamente após alguma atualização ocorrer
- `componentWillUnmount()`: método invocado imediatamente antes de um componente ser desmontado
- `shouldComponentUpdate()`: método invocado antes da renderização, quando são recebidas novas props ou states

## Criando um app React

```shell
yarn create react-app front
npx create-react-app front
```

# Start

- Criar um novo banco de dados chamado pizzaria
- Importar o banco `pizzaria.sql` para `server`

## Rodando o app

Server

```shell
cd ./server
yarn start
```

Front

```shell
cd ./front
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

## Queries

```javascript
export const GET_CATEGORIAS =
  "{ categorias { name sabores { name ingredientes } } }";
export const GET_SABORES =
  "{ sabores { name ingredientes categoria { name } } }";

export const ADD_CATEGORIA =
  "mutation ($name: String!) { addCategorias (name: $name) { id name } }";
export const ADD_SABORES =
  "mutation ($name: String!, $ingredientes: String!, $categoriaId: Int!) { addSabores (name: $name, ingredientes: $ingredientes, categoriaId: $categoriaId) { id name ingredientes } }";

export const UPDATE_CATEGORIA =
  "mutation ($id: ID!,$name: String!) { updateCategoria (id: $id, name: $name) { id name } }";
export const UPDATE_SABORES =
  "mutation ($id: ID!, $name: String!, $ingredientes: String!, $categoriaId: Int!) { updateSabor (id: $id, name: $name, ingredientes: $ingredientes, categoriaId: $categoriaId) { id name ingredientes categoriaId } }";

export const DELETE_CATEGORIA =
  "mutation ($id: ID!) { deleteCategoria (id: $id) }";
export const DELETE_SABORES = "mutation ($id: ID!) { deleteSabor(id: $id) }";
```

# Bibliotecas

- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [GraphQL](https://github.com/prisma-labs/graphql-yoga)
- [Axios](https://github.com/axios/axios)
- [Material-UI](https://material-ui.com/)

# Emmet React:

Ctrl+Shift+P

\> Preferences: Open Settings (JSON)

```json
"emmet.syntaxProfiles": {
    "javascript": "jsx"
},
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
}
```
