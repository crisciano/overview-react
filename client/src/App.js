import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Categorias from './api/services/Categorias'
import Sabores from './api/services/Sabores'

import Home from './Components/Home/Home'


class App extends Component  {

  constructor(props){
    super(props)
    this.state = {
      categorias: [],
      sabores: []
    }
  }

  componentDidMount(){

    this.getCategorias()
    // this.getSabores()

  }

  getCategorias() {
    Categorias.get()
                  .then( categorias => {
                    this.setState(categorias)
                  })
  }

  getSabores() {
    Sabores.get()
              .then( sabores => {
                this.setState(sabores)
              })
  }

  handleClick() {
    console.log('click');
    // Categorias.add({name: "teste update", id: 8})
    Sabores.add({name: "teste - update", ingredientes: "teste", categoriaId: 1, id: 13 })
    // Sabores.del(12)
    // sabor 12 
    // Categorias.del(7)
    // categoria 7
  }


  render() {
    return (
      <div className="App">
        <Home />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            className="App-link"
            // href="https://reactjs.org"
            // target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleClick}
            >
            Learn React
          </button>
        </header>
      </div>
    );
  }
}

export default App