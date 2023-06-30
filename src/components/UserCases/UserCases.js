import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import { Card, Typography } from '@mui/material';
import { NavLink, useParams, useOutletContext } from 'react-router-dom';
import Case from '../Case/Case';

const UserCases = () => {
  const params = useParams()
  const context = useOutletContext()

  const list = context[0].cases.map(item => {
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
    <div>
      {list}
    </div>
  )
}

export default UserCases
