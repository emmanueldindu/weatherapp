
import './App.css';
import React, {useState} from 'react'
const api = {
  key: "e299670088ebc21ae0bc1051d35b11e3",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('');
          console.log(result)
        })
    }
  }
  

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}  ${date} ${month} ${year}`
    
}

  return (
    <div className="app">
      <main>
        <div className="search-box">

          <input type="text"
            name=""
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            className="search-bar" />
        </div>
         
        {(typeof weather.main != "undefined") ? (
          <div className="">

            <div className="location-box">
              
              <div className="location">
                
            {weather.name}
            {/* {console.log(weather.sys.country)} */}
            </div>
            <div className="date">
              {dateBuilder(new Date())}
              
            </div>
            <div className="weather-box">
              <div className="temp">
                15°
              </div>
              <div className="weather">
                Sunny
              </div>
            </div>
          </div>

          </div>
          ): ('')}
        
        
      </main>
 
    </div>
  );
}

export default App;
