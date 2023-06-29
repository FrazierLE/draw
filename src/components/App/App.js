import './App.css';
import Draw from '../Draw/Draw';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import SavedSection from '../SavedSection/SavedSection';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/digistrip' 
        element={<div>
        <NavBar />
        <Draw />
        <SavedSection />
      </div>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
    </div>
  );
}

export default App;
