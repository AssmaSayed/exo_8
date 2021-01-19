import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  state={
    nombre:1
  }

  render() {
    console.log(this.state.nombre);
    return (
      <div>
        <h1 onMouseOver={(e)=>{
          console.log(e.target.innerHTML)
        }}>Exercice 8</h1>

        <button onClick={()=> {
          console.log('Bonjour')
        }}>Button Click</button>

         <button onMouseOver={()=> {
          console.log('Bonjour')
        }}>Button Over</button> 
        
        <button onCopy={()=> {
          console.log('Bonjour')
        }}>Button Copy</button> 
        
        <button onDoubleClick={()=> {
          console.log('Bonjour')
        }}>Button Double Click</button>
      </div>
    )
  }
}

export default App
