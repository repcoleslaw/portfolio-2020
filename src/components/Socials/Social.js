import React from 'react'
import { Grid } from '@mui/material'
// import assets
import {IconButton} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



function Social() {
  return (
      <Grid container columnGap={6} justifyContent="center">
        <IconButton href="mailto:andrew.rr.cole@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon/></IconButton>
        <IconButton href="https://www.linkedin.com/in/andrewrrcole/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></IconButton>
        <IconButton href="https://twitter.com/arrcole" target="_blank" rel="noopener noreferrer"><TwitterIcon/></IconButton>
        <IconButton href="https://www.instagram.com/arrcole/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></IconButton>
      </Grid>
  )
}

export default Social