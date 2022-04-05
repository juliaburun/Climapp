import './assets/css/App.css';
import Navbar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';


function App() {
  return (
    <div className="App">
      <Navbar />
      <WeatherPanel />
    </div>
  );
}

export default App;
