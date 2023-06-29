import React, {useState} from 'react';
import {Box, Modal, Fade, Button, Typography, Backdrop, TextField, InputAdornment} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddIcon from '@mui/icons-material/Add';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

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
};

const NewFolderModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            id="input-with-icon-caseName"
            label="Case Name"
            type='text'
            // value={username}
            // onChange={e => setUsername(e.target.value)}
            sx={{margin: '10px'}}
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon />
              </InputAdornment>
            ),}}
            variant="outlined"
            />
            <Button><PersonAddAltIcon />Create</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default NewFolderModal
