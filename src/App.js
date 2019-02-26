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
        pageTitle: 'React Theory About "State"',
        showCars: false
    };
    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };
    changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
    }

   /* changeTitleHandler = (newTitle) => {
        // console.log("clicked")
       /!* const oldTitle = this.state.pageTitle
        const newTitle = oldTitle + ' (changed)';*!/
        this.setState({
            pageTitle: newTitle
        })
    };*/

    /*handleInput = (event) => {
        this.setState({
         pageTitle: event.target.value
        })
    };*/
  render() {
      const divStyle = {
        // 'text-alegn' : 'center'
        textAlign: 'center'
      };

      //const cars = this.state.cars;

      //second way to create toogle outside construction jsx
      let cars = null;
      if(this.state.showCars){
          cars =  this.state.cars.map((car, index) => {
              return (
                  <Car
                      key={index}
                      name={car.name}
                      year={car.year}
                      onChangeTitle={() => this.changeTitleHandler(car.name)}
                  />
              )
          })
      }
      return (
      <div className="App" style={divStyle}>
          <h1 style={{color: 'tomato', fontSize: '48px', fontWeight: '700'}}>{this.state.pageTitle}</h1>

          <input type="text" onChange={this.handleInput}/>
          <button
              onClick={this.toggleCarsHandler}>Toggle cars
          </button>
          {cars}

          {/*first way to create toggle with jsx*/}
         {/* {this.state.showCars ?
              this.state.cars.map((car, index) => {
                  return (
                      <Car
                          key={index}
                          name={car.name}
                          year={car.year}
                          onChangeTitle={() => this.changeTitleHandler(car.name)}
                      />
                  )
              })
              : null
          }*/}

         {/*<Car name={cars[0].name}
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
         />*/}

      </div>
    );
  }


}
export default App;
