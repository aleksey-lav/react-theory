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
    changeTitleHandler = (newTitle) => {
        // console.log("clicked")
       /* const oldTitle = this.state.pageTitle
        const newTitle = oldTitle + ' (changed)';*/
        this.setState({
            pageTitle: newTitle
        })
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

          <button
              onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change Title and color
          </button>

         <Car name={cars[0].name}
              year={cars[0].year}
              //черехз bind более правильно
              onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
         />

         <Car name={cars[1].name}
              year={cars[1].year}
              onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
         />

         <Car name={cars[2].name}
              year={cars[2].year}
              onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
         />

      </div>
    );
  }
}
export default App;
