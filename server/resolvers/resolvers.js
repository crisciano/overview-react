const Categorias = require('../db/services/Categorias')
const Sabores = require('../db/services/Sabores')


module.exports = {
    Query: {
        categorias: () => Categorias.list(),
        sabores: () => Sabores.list(),

        getCategoria: (root, {id}) => Categorias.getById(id),
        getSabor: (root, {id}) => Sabores.getById(id),

    },
    Mutation: {
        addCategorias: (root, params) => Categorias.add(params),
        addSabores: (root, params) => Sabores.add(params),

        deleteCategoria: (root, {id}) => Categorias.delete(id),
        deleteSabor: (root, {id}) => Sabores.delete(id),

        updateCategoria: (root, params) => Categorias.update(params),
        updateSabor: (root, params) => Sabores.update(params),
    }
}