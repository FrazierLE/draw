import React, { useState } from 'react'
import { Box, Card, Button } from '@mui/material'
import UserFolder from '../UserFolder/UserFolder'
import NewFolderModal from '../NewFolderModal/NewFolderModal'

const Dashboard = () => {
  const [users, setUsers] = useState([{id: 1, fileName: 'user643'}])
  const [fileName, setFileName] = useState('')

  const addNewUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: Date.now(),
      fileName: fileName
    }
    setUsers([...users, newUser])
  }

  const displayFolders = users.map(user => {
    return(
      <UserFolder 
        key={user.id}
        id={user.id}
        fileName={user.fileName}
      />
    )
  })

  return (
    <Box>
      {/* <Button onClick={(e) => addNewUser(e)}><AddIcon />Add New User</Button> */}
      <Box>
        {users && displayFolders}
        <NewFolderModal />
      </Box>
    </Box>
  )
}

export default Dashboard