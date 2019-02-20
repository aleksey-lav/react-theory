import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  render() {
      const divStyle = {
        // 'text-alegn' : 'center'
        textAlign: 'center'
      };

      return (
      <div className="App" style={divStyle}>
        <h1 style={{'color': 'tomato', fontSize: '48px'}}>React theory</h1>
         <Car/>
      </div>
    );
  }
}

export default App;
