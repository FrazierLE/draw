import './App.css';
import Draw from '../Draw/Draw';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import SavedSection from '../SavedSection/SavedSection';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function App() {
  let location = useLocation()

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {location.pathname !== '/' && <NavBar />}
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/digistrip' 
        element={<div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Draw />
        {/* <SavedSection /> */}
      </div>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
    </div>
  );
}

export default App;
