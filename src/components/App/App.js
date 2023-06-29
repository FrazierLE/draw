import React, { useState } from 'react'
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
  const [users, setUsers] = useState([{id: 1, fileName: 'user643'}])
  const [folderResults, setFolderResults] = useState([])

  const createNewUser = (newUser) => {
    setUsers([...users, newUser])
  }

  const searchFolders = (search) => {
    const filteredSearch = users?.filter(user => user.fileName.toLowerCase().match(search.toLowerCase()))
    setFolderResults(filteredSearch)
    // if(filteredSearch.length > 0) {
    //   setFolderResults('')
    // } else {
    //   setFolderResults('Sorry no users found by that filename. Please adjust your search.')
    // }
  }

  const resetSearch = () => {
    setFolderResults([])
  }

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
      <Route path='/dashboard' element={<Dashboard createNewUser={createNewUser} users={users} searchFolders={searchFolders} folderResults={folderResults} resetSearch={resetSearch}/>}/>
    </Routes>
    </div>
  );
}

export default App;
