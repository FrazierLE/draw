import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Card, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import Case from '../Case/Case';

const UserFolder = ({ id, fileName }) => {
  return(
    <div>
      <NavLink to={`/dashboard/${id}`} >
        <Card sx={{height: '20vh', width: '15vw', margin: '15px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <FolderIcon sx={{fontSize: '48px'}}/>
          <Typography variant='h6'>{fileName}</Typography>
        </Card>
      </NavLink>
    </div>
  )
}

export default UserFolder 