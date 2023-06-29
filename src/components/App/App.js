import './App.css';
import Draw from '../Draw/Draw';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import SavedSection from '../SavedSection/SavedSection';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
        <NavBar />
        <Draw />
        <SavedSection />
      </div>
    </div>
  );
}

export default App;
