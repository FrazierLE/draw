import React, { useState } from 'react'
import { Box, Card, Button } from '@mui/material'
import UserFolder from '../UserFolder/UserFolder'
import NewFolderModal from '../NewFolderModal/NewFolderModal'

const Dashboard = ({ createNewUser, users }) => {
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
      <NewFolderModal createNewUser={createNewUser}/>
      <Box sx={{display: 'flex', width: '75vw', height: '75vh', flexWrap: 'wrap'}}>
        {users && displayFolders}
      </Box>
    </Box>
  )
}

export default Dashboard