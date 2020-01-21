# Overview React

pre requisitos
    conhecimento JS


yarn create react-app front
npx create-react-app front

conceitos basicos
- Components:
    são functions que retornam elementos renderizados no DOM 
- State:
    são variaveis que podem ser reutilizadas em um component
- Props:
    são propriedades transferidas de pais para filhos

conceitos utils
- fragment
    permite agrupas multiplos components sem adição extas no DOM

immutable
    consiste em nao alterar um state, mais sim criar um novo valor para esse state


## Schema

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
const categorias = "{categorias{ name sabores{ name ingredientes }}}" 
const sabores = "{sabores{ name ingredientes categoria{ name }}}" 
```


library
    https://pt-br.reactjs.org/docs/getting-started.html





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