import React, { useState } from 'react'
import { Backdrop, Button, Modal, Fade, Box, Typography, TextField, InputAdornment } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddIcon from '@mui/icons-material/Add';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ContactsIcon from '@mui/icons-material/Contacts';
import UploadIcon from '@mui/icons-material/Upload';
import CreateIcon from '@mui/icons-material/Create';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex', 
  flexDirection: 'column'
};

const NewCaseModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [attorney, setAttorney] = useState()
  const [client, setClient] = useState()

  return (
    <div>
      <Button onClick={handleOpen}><AddIcon />Add New Folder</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              New User
            </Typography>
            <TextField
            id="input-with-icon-attorney"
            label="Attorney"
            type='text'
            name='attorney'
            value={attorney}
            onChange={e => setAttorney(e.target.value)}
            sx={{margin: '10px'}}
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactsIcon />
              </InputAdornment>
            ),}}
            variant="outlined"
            />
               <TextField
            id="input-with-icon-client"
            label="Client"
            type='text'
            name='client'
            value={client}
            onChange={e => setClient(e.target.value)}
            sx={{margin: '10px'}}
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon />
              </InputAdornment>
            ),}}
            variant="outlined"
            />
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Button>< CreateIcon/>Create DigiStrip</Button>
              <Button>< UploadIcon />Upload DigiStrip</Button>
            </Box>
            <Button><PersonAddAltIcon />Create</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default NewCaseModal