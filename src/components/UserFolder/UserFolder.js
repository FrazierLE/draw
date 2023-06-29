import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Card, Typography } from '@mui/material';

const UserFolder = ({id, fileName}) => {
  return(
    <Card sx={{width: '25%', height: '25%', margin: '15px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <FolderIcon sx={{fontSize: '48px'}}/>
      <Typography variant='h6'>{fileName}</Typography>
    </Card>
  )
}

export default UserFolder 