const request = require('../request')

class Categorias {

    list = () =>{
        const sql = `SELECT * FROM  categorias; SELECT * FROM sabores;`
        return request(sql)
                .then(querys =>(
                    querys[0].map(categoria => ({
                        ...categoria,
                        sabores: querys[1].filter(sabor => sabor.categoriaId === categoria.id )
                    }))
                ))
                .then(res =>(res))
    }

    getById = id => {
        const sql = `SELECT * FROM categorias WHERE id=${id}`
        return  request(sql)
                    .then(query => ({
                        ...query[0]
                    }))
    }

    add = ({name}) => {
        const sql = `INSERT INTO categorias(name) VALUES('${name}')`
        return request(sql)
                .then(res =>({
                    id: res.insertId,
                    name
                }))
    }

    update = ({id, name}) => {
        const sql = `UPDATE categorias SET name='${name}' WHERE id=${id}`
        return request(sql)
                .then(res =>({
                    id,
                    name
                }))
    }

    delete = (id) => {
        const sql = `DELETE FROM categorias WHERE id=${id}`
        return request(sql)
                .then(res => id)
    }
}

module.exports = new Categorias