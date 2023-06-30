import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Card, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Case = ({ id, attorney, client, digistrip}) => {
  return(
       <div>
        <Card sx={{height: '20vh', width: '15vw', margin: '15px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <FolderIcon sx={{fontSize: '48px'}}/>
          <Typography variant='h6'>{id}</Typography>
        </Card>
      </div>
  )
}

export default Case