const conexao = require('./conection')

const request = query => {
    return new Promise( 
        (resolve, reject) => {
            conexao.query(query, (err, result) => {
                err? reject(err) : resolve(result)
            })
        }
    )
}

module.exports = request