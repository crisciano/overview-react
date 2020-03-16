import React, { Component } from 'react'
import { TextField, Button, FormControl } from '@material-ui/core'

class FormCategoria extends Component {

    constructor(props){
        super(props)
        this.state = {
            form: {}
        }
    }

    handleSubmit() {

    }

    handleChange(e){
        let name = e.target.name
        let value = e.target.value
        console.log(e.target.name);

        this.setState({[name] : value})

    }


    render() {
        return (
            <>
                <h4>Cadastro categoria</h4>

                <form onSubmit={this.handleSubmit.bind(this)} > 
                    <FormControl >

                        <TextField 
                            fullWidth
                            type="text"
                            name="name"
                            label="Nome ... " 
                            value={this.form}
                            onChange={this.handleChange.bind(this)}
                            variant="outlined" 
                            />

                        <Button 
                            sytle={{marginTop: '15px'}}
                            color="primary"
                            type="submit"
                            variant="contained"> cadastrar</Button>
                    </FormControl>

                </form>
            </>
        )
    }
}

export default FormCategoria