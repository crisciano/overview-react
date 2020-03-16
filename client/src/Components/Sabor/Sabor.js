import React, { Component } from 'react'
import Theme from '../../Theme';

class Sabor extends Component{

    static contextType = Theme

    render(){
        const { sabor } = this.props
        const theme = this.context;
        // const theme = useContext(Theme)
        console.log(theme);
        return (
            <div style={theme.sabores.box}>
                <h4 style={theme.h4}>{sabor.name}</h4>
                <small>{ sabor.ingredientes }</small>
                <hr/>
            </div>
        )
    }
}

export default Sabor