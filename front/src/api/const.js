
export const api = "http://localhost:4000"

export const header = {
    method: "post",
    headers: { "Content-Type": "application/json"}
};

export const GET_CATEGORIAS = "{categorias{ name sabores{ name ingredientes }}}"
export const GET_SABORES = "{sabores{ name ingredientes categoria{ name }}}"

export const ADD_CATEGORIA = 'mutation ($name: String!) { addCategorias(name: $name){ id name }}';
export const ADD_SABORES = 'mutation ($name: String!, $ingredientes: String!, $categoriaId: Int!) { addSabores(name: $name, ingredientes: $ingredientes, categoriaId: $categoriaId){ id name ingredientes }}';

export const UPDATE_CATEGORIA = 'mutation ($id: ID!,$name: String!) { updateCategoria(id: $id, name: String!){ id name }}';
export const UPDATE_SABORES = 'mutation ($id: ID!, $name: String!, $ingredientes: String!, $categoriaId: Int!) { updateSabor(name: $name, ingredientes: $ingredientes, categoriaId: $categoriaId){ id name ingredientes }}';

export const DELETE_CATEGORIA = 'mutation ($id: ID!) { deleteCategoria(id: $id) }'
export const DELETE_SABORES = 'mutation ($id: ID!) { deleteSabor(id: $id) }'