# Overview React

Pré-requisitos

- Conhecimento em JS
- NodeJS
- Yarn
- MySQL

## Conceitos básicos
- Components:
    são functions que retornam elementos renderizados no DOM 
- State:
    são variáveis que podem ser reutilizadas em um component
- Props:
    são propriedades transferidas de components pais para components filhos

## Conceitos utils
- Fragment:
    permite agrupares múltiplos components sem adições extras no DOM
- immutable
    consiste em nao alterar um state, mas sim criar um novo a partir desse state

## Ciclo de vida

- `constructor(props)`: metodo chamado antes do component ser montado
    - Inicializa o state local do component
- `render()`: único método obrigatório, vare o state e props para renderizar um dos seguintes tipos
    - elemento React em formato JSX
    - Arrays e fragmentos 
    - Portals renderiza elementos filhos dentro do nó dom do pai
    - String ou números em formato de texto
- `componentDidMount()`: método invocado imediatamente apos um component ser montado
    - utilizado para fazer chamadas para apis e montar o state
- `componentDidUpdate(prevProps, prevState, snapshot)`: método invocado imediatamente após alguma atualização ocorrer.
- `componentWillUnmount()`: método invocado imediatamente antes de um componente seja desmontado.
- `shouldComponentUpdate()`: método invocado antes da renderização, quando e recebido novas props ou states

## Criando app React
```javascript
yarn create react-app front
npx create-react-app front
```

# Start

- Criar um novo banco de dados chamado pizzaria
- Importar o banco `pizzaria.sql` para `server`

## Rodar app
Server
```shell
cd /server
yarn start
```
Front

```shell
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

## Queries

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
- [Material ui](https://material-ui.com/)
- [React router](https://reacttraining.com/react-router/web/guides/quick-start)




emmet React
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