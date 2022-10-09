import React from 'react'
import { Button, Grid, Modal, Box } from '@mui/material'
// import
import ContactModal from '../ContactModal/ContactModal';



function Header() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Grid>
        <Box sx={{border:"1px solid red", zIndex:"300"}}>
        <Button href="/">Home</Button>
        <Button href='about'>About</Button>
        <Button onClick={handleOpen}>Contact</Button>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <ContactModal/>
        </Modal>
        </Box>
    </Grid>
  )
}

export default Header