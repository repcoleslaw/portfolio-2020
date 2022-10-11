import React from 'react'
import { Button, Modal, Grid } from '@mui/material'
import ContactModal from '../Contact/ContactModal';

function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyle={
    background:"#eeeeee",
    boxShadow:""
  }
  
  return (
    <Grid sx={{textAlign:"center", padding:"2rem"}}>
      <Button sx={buttonStyle} onClick={handleOpen}>Contact</Button>
      <Modal open={open} onClose={handleClose}>
        <ContactModal/>
      </Modal>
    </Grid>
  )
}

export default Header