import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Box, Typography } from '@mui/material';
import { NavLink, useParams, useOutletContext } from 'react-router-dom';
import Case from '../Case/Case';

const UserCases = () => {
  const params = useParams()
  const context = useOutletContext()
  const match = context.filter(item => item.id === Number(params.id))

  const list = match[0].cases?.map(item => {
    return(
      <Case 
        key={item.id}
        id={item.id}
        attorney={item.attorney}
        client={item.client}
        digistrip={item.digistrip}
      />
    )
  })

  return(
    <Box>
      <Typography variant='h3'>
        User Cases
      </Typography>
      {list ? <div>{list}</div> : <h3>This User has no cases yet.</h3>}
    </Box>
  )
}

export default UserCases
