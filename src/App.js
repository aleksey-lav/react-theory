import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
      const divStyle = {
        // 'text-alegn' : 'center'
        textAlign: 'center'
      };

      return (
      <div className="App" style={divStyle}>
        <h1 style={{'color': 'tomato', fontSize: '48px'}}>React theory</h1>
      </div>
    );
  }
}

export default App;
