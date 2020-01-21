const request = require('../request')

class Sabores {

    list = () => {
        const sql = `SELECT * FROM sabores; SELECT * FROM categorias;`
        return request(sql)
                .then(querys =>(
                    querys[0].map(sabor => ({
                        ...sabor,
                        categoria: querys[1].filter(categoria => sabor.categoriaId === categoria.id )[0]
                    }))
                ))
                .then(res =>(res))
                // .then(res => console.log( JSON.stringify(res, null, 4)))
    }

    getById = id => {
        const sql = `SELECT * FROM sabores WHERE id=${id}`
        return  request(sql)
                    .then(query => ({
                        ...query[0]
                    }))
    }

    add = ({name, ingredientes, categoriaId}) =>{
        const sql = `INSERT INTO sabores(name, ingredientes, categoriaId) VALUE('${name}', '${ingredientes}' ,'${categoriaId}')`
        return request(sql)
                .then(res => ({
                    id: res.insertId,
                    name,
                    ingredientes,
                    categoriaId
                }))
    }

    delete = (id) => {
        const sql = `DELETE FROM sabores WHERE id=${parseInt(id)}`
        return request(sql)
                .then(res => id)
    }

}

module.exports = new Sabores