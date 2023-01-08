
import './App.css';
const api = {
  key: "e299670088ebc21ae0bc1051d35b11e3",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
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
            placeholder='search'
            className="search-bar" />
        </div>
         
          <div className="location-box">
            <div className="location">
              New York City, US
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
        
        
      </main>
 
    </div>
  );
}

export default App;
