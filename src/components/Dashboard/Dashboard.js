import React, { useState } from 'react'
import { Box } from '@mui/material'
import UserFolder from '../UserFolder/UserFolder'
import NewFolderModal from '../NewFolderModal/NewFolderModal'
import SearchForm from '../SearchForm/SearchForm'

const Dashboard = ({ createNewUser, users, searchFolders, folderResults, resetSearch }) => {
  const displayFolders = users.map(user => {
    return(
      <UserFolder 
        key={user.id}
        id={user.id}
        fileName={user.fileName}
      />
    )
  })

  const displayFolderResults = folderResults?.map(user => {
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
        <SearchForm users={users} resetSearch={resetSearch} folderResults={folderResults} searchFolders={searchFolders}/>
      </Box>
      <Box sx={{display: 'flex', width: '75vw', height: '75vh', flexWrap: 'wrap'}}>
        {folderResults.length > 0 ? displayFolderResults : displayFolders}
      </Box>
    </Box>
  )
}

export default Dashboard