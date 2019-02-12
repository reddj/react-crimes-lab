import React, { Component } from 'react';
import CrimesList from './CrimesList/CrimesList'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  state = {
    crimes: []
  }

    getCrimes = async () => {

    try {
      const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json');
      const crimesJson = await crimes.json();
      this.setState({
        crimes: crimesJson
      })
    } catch (error) {
      console.log(error, 'error in catch block')
      return error
    }
}
    componentDidMount(){
      this.getCrimes().then((data) => {
        console.log(data, ' from famous quotes')
     })
    }


  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <CrimesList crimes={this.state.crimes} />
      </div>
    );
  }
}
