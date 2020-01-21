class CreateDB {
    init(conexao) {
      this.conexao = conexao
      this.createCategorias()
      this.createSabores()

      console.log('Tables DB create!')
    }
  
    createCategorias() {
      const sql = 'CREATE TABLE IF NOT EXISTS categorias (id int NOT NULL AUTO_INCREMENT, name varchar(150) NOT NULL, PRIMARY KEY (id));'
      this.createTabela(sql)
    }

    createSabores() {
        const sql = 'CREATE TABLE IF NOT EXISTS sabores (id int NOT NULL AUTO_INCREMENT, name varchar(150), ingredientes varchar(150), categoriaId int, PRIMARY KEY (id), FOREIGN KEY (categoriaId) references categorias(id))'
        this.createTabela(sql)
    }

    createTabela(sql) {
      this.conexao.query(sql, erro => {
        if(erro) {
          console.log(erro)
        }
      })
    }
  }
  
  
  
  module.exports = new CreateDB
  