import logo from './logo.svg';
import './App.css';
import travelData from "./data"
import navIcon from "./logo192.png";
export default function NavPage(){
    return (
        <div className='nav--div'>
        <nav className='nav--title'>
          <img src={navIcon} className='nav--icon'/>
          <h7> 
            <span className='nav--headerTitle'>Travel project</span>
          </h7>
  
        </nav>
      </div>
    )
}