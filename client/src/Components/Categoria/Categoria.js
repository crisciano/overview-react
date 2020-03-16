import React, { Component, Fragment } from 'react'

import Sabor from '../Sabor/Sabor'
import Theme from '../../Theme'
// import { Container } from '@material-ui/core'

class Categoria extends Component {
    static contextType = Theme

    
    render(){
        const { title = "Component" , categorias = [] }  = this.props
        const { header, container } = this.context

        return (
            <>
                <div>{title}</div>
                    {
                        categorias.map((cat, key)=> (
                            <Fragment key={key}>
                                <section style={header}>
                                    <h2 style={header.title}>{cat.name}</h2>
                                </section>
                                <section>
                                    {/* <Container> */}
                                        <h2 style={{textAlign: 'center'}}>Sabores</h2> 
                                        <div style={container}>
                                            {
                                                cat.sabores.map((sabor, key) =>(
                                                    <Sabor sabor={sabor} key={key}/>
                                                ))
                                            }
                                        </div>
                                    {/* </Container> */}
                                </section>
                            </Fragment>
                        ))
                    }
            </>
        )
    }

}

export default Categoria