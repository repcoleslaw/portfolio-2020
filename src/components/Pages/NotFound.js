import React from 'react'
import {Typography, Button, Paper} from '@mui/material'

const style = {
    position:"relative",
    left:"40vw",
    width:"40vw",
    padding:"2rem",
    background:"rgba(255,255,255,0.65)",

}

function NotFound() {
  return (
    <Paper sx={style}>
        <Typography variant='h1'>404</Typography>
        <Typography>Hmm... I didn't expect that one.</Typography>
        <Typography>Let's get you back to where I want you to look!</Typography>
        <Button variant="outlined" href="/">Back Home</Button>
    </Paper>
  )
}

export default NotFound