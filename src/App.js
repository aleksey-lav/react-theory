import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

    state = {
      cars: [
          {name: 'Ford', year: '2017'},
          {name: 'Toyota', year: '2010'},
          {name: 'Honda', year: '2019'}
      ],
        pageTitle: 'React Theory About "State"'
    };

  render() {
      const divStyle = {
        // 'text-alegn' : 'center'
        textAlign: 'center'
      };

      const cars = this.state.cars;

      return (
      <div className="App" style={divStyle}>
          <h1 style={{color: 'tomato', fontSize: '48px', fontWeight: '700'}}>{this.state.pageTitle}</h1>

         <Car name={cars[0].name} year={cars[0].year}/>
         <Car name={cars[1].name} year={cars[1].year}/>
         <Car name={cars[2].name} year={cars[2].year}/>


      </div>
    );
  }
}

export default App;
