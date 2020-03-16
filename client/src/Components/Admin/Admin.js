import React, { Component } from 'react'

import {Container} from '@material-ui/core'
import FormCategoria from '../Forms/FormCategoria'

class Admin extends Component {

    render () {
        return (
            <Container >
                <FormCategoria />

            </Container>
        )
    }
}

export default Admin