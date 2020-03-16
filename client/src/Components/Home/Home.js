import React, { Component } from 'react'

import Categoria from '../Categoria/Categoria'

import Categorias from '../../api/services/Categorias'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            categorias: []
        }
    }

    componentDidMount(){
        Categorias.get()
                    .then(({categorias}) => this.setState({categorias}))
    }
    handleClick(){
        const obj = {ingredientes: "Cebola / Azeitonas", name: "teste "}

        this.setState(
            pv => ( pv.categorias[0].sabores.push(obj) )
        )


        console.log('click');
    }

    render(){
        const { categorias } = this.state
        console.log(categorias);
        return (
            <>
                <div className="div">home</div>
                <button onClick={this.handleClick.bind(this)}> add novo sabor</button>
                <Categoria title={'Categoria'} categorias={categorias} />
            </>
        )
    }
}

export default Home