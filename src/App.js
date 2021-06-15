import React, {useState} from 'react';
import "./index.css";
import './App.css';

const api = {
  key : "ecf370ab2da609a3e3da750cae0d3019",
  base : "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  }

  const search = evt =>{
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
        .then(res=> res.json())
        .then(result=>{
          setWeather(result);
          setQuery('');
      })
    }
  }

  return (
      <div className="App">
        <div className="wrapper">
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div className="location d-flex flex-column ">
              <div className="name">{weather.name},{weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="temp">{Math.round(weather.main.temp)}°</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div> 
          ) : ('')}
        </div>
      </div>
    );
}
export default App;
