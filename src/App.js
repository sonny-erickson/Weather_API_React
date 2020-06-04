import React, { Component } from "react";
import Form from './components/Form';
import Weather from './components/Weather';
import "./index.css";
import './App.css';

const apiKey = "ecf370ab2da609a3e3da750cae0d3019";


class App extends Component {
  state={
    city: undefined,
    country: undefined,
    temp:undefined,
    weather:undefined,
    error: undefined,
    loading: false
  }
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
    const data = await apiCall.json();
    console.log(data);
   if(city && country){
    this.setState({
      city : data.name,
      country : data.sys.country,
      temp : data.main.temp,
      weather : data.weather[0].description,
      error: ''
    });
   }else{
    this.setState({
      city : undefined,
      country : undefined,
      temp : undefined,
      weather : undefined,
      error: 'Entrez une valeur'
      
    });
   }
  }
   
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Form getWeather={this.getWeather}/>
          <Weather/>
        </div>
      </div>
    );
  }
}
export default App;
