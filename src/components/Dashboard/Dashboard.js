import React, { useState } from 'react'
import { Box } from '@mui/material'
import UserFolder from '../UserFolder/UserFolder'
import NewFolderModal from '../NewFolderModal/NewFolderModal'
import SearchForm from '../SearchForm/SearchForm'

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
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <NewFolderModal createNewUser={createNewUser}/>
        <SearchForm users={users}/>
      </Box>
      <Box sx={{display: 'flex', width: '75vw', height: '75vh', flexWrap: 'wrap'}}>
        {users && displayFolders}
      </Box>
    </Box>
  )
}

export default Dashboard