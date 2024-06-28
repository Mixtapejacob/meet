import logo from './logo.svg';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList events={[{}, {}, {}]} />
    </div>
  );
}

export default App;
