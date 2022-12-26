import logo from './logo.svg';
import './App.css';
import travelData from "./data"
import navIcon from "./logo192.png";
import NavPage from './NavPage';
import TravelCard from "./TravelCard"

function App() {
  const travelMap = travelData.map(element=>{
    return (
      <TravelCard 
      key={element.id}
      items={element}
      />
    )

  });
  // console.log(travelData);
  return (
    <div className='main-container'>
      <NavPage />
      <div className="travel-container">
      {travelMap}
      </div>
    </div>
  );
}

export default App;
