import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

const SearchForm = ({ users, searchFolders, folderResults, resetSearch }) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    searchFolders(input)
    setInput('')
  }

  return(
    <Box>
      <TextField 
        id="outlined-basic" 
        label="Search" 
        variant="outlined" 
        size="small"
        name='input'
        value={input}
        onChange={e => handleChange(e)}
        />
      <Button onClick={e => handleClick(e)}>Submit</Button>
      {folderResults.length > 0 && <Button onClick={resetSearch}>Reset</Button>}
    </Box>
  )
}

export default SearchForm