
import './App.css';
const api = {
  key: "e299670088ebc21ae0bc1051d35b11e3",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" name=""
            placeholder='search' className="search-bar" />
        </div>
        
      </main>
 
    </div>
  );
}

export default App;
