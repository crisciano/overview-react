import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Theme from '../../Theme'

class Menu extends Component {

    static contextType = Theme

    render(){
        const {menu} = this.context
        return (
            <nav>
                <ul style={menu.ul}>
                    <li style={menu.li}><Link to="/">Home</Link> </li>
                    <li style={menu.li}><Link to="/admin">Admin</Link> </li>
                </ul>
            </nav>
        )
    }
}

export default Menu