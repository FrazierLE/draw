import React from 'react'
import { Box, TextField, Button } from '@mui/material'

const SearchForm = ({ users }) => {
  

  return(
    <Box>
      <TextField id="outlined-basic" label="Search" variant="outlined" size="small"/>
      <Button>Submit</Button>
    </Box>
  )
}

export default SearchForm