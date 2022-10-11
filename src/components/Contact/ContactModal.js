import React from 'react'
import {Box, Typography} from '@mui/material'
import Social from '../Socials/Social';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: "5px"
  };

function ContactModal() {
  return (
    <Box sx={style}>
        <Typography variant="h6" sx={{textAlign:"Center"}}>Send me a note</Typography>
        <hr/>
        <Social/>
    </Box>
  )
}

export default ContactModal