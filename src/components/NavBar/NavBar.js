import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Button, Typography, MenuList, MenuItem } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
  const [open, setOpen] = useState(false)

  return(
    <Box sx={{flexGrow: 1, margin: '15px', border: '3px solid black', borderRadius: '5px'}}>
      <AppBar position='static' sx={{backgroundColor: 'rgb(30, 52, 105)'}}>
        <Toolbar> 
          <Typography variant="h3" sx={{ flexGrow: 1, color: 'white'}}>
            DigiStrip
          </Typography>
          {open === false && 
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon/>
          </IconButton>}
        </Toolbar>
      </AppBar>
        {open === true && 
        <Box sx={{display: 'flex', justifyContent:'flex-end', border: '1px solid'}}>
          <MenuList sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Button onClick={() => setOpen(false)} sx={{width:'5vw'}}><CloseIcon variant='contained' /></Button>
            <MenuItem>DigiStrip</MenuItem>
            <MenuItem>User Dashboard</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Box>
        }
    </Box>
  )
}

export default NavBar