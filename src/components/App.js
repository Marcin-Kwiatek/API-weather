import { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

//Klucz do API
const APIKey = '110c18087316d2f287d421705804c15b'

class App extends Component {
  state={
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: "false"
  }
  render(){
  return (
    <div className="App">
      <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit}/>
      <Result weather={this.state}/>
    </div>
  )}
    handleInputChange = e => {
      this.setState({value:e.target.value})
    }
    handleCitySubmit = e => {
      e.preventDefault()
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`
      fetch(API)
      .then(response => {
        if(response.ok){
          return response
        }
        throw Error('Nie udało się')
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState({
          err:false,
          date: time,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          err:true,
          city:this.state.value
        })
      })
    }
}

export default App;
