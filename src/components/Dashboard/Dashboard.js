import React, { useState } from 'react'
import { Box, Card, Button } from '@mui/material'
import UserFolder from '../UserFolder/UserFolder'
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {
  const [users, setUsers] = useState([])

  const addNewUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: Date.now()
    }
    setUsers([...users, newUser])
  }


  return (
    <Box>
      <Button onClick={(e) => addNewUser(e)}><AddIcon />Add New User</Button>
      {/* <UserFolder /> */}
    </Box>
  )
}

export default Dashboard