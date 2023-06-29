import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Card, Typography } from '@mui/material';

const UserFolder = ({id, fileName}) => {
  return(
    <Card sx={{height: '100px'}}>
      <FolderIcon sx={{fontSize: '48px'}}/>
      <Typography variant='h6'>{fileName}</Typography>
    </Card>
  )
}

export default UserFolder 