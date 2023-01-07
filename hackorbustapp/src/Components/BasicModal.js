import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';


const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: "center"
};

export default function BasicModal({acceptSSL}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  useEffect(() => {
    //call when loads page
    if(acceptSSL){
      handleClose()
    }else{
      handleOpen()
    }
    
  }, [acceptSSL])
  
  function handleClick() {
    window.open("https://198.58.120.118:4433").focus()
  }


  return (
    <div>
      <Modal
        open={open}
        onClose={null}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Checking SSL Certificate
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            If you haven't accepted SSL click on link
          </Typography>
          <Link style={{color: "red", alignContent:"center", marginTop: 5}} onClick={handleClick}>
            HackOrBust Kali VM
          </Link>{" "}
        </Box>
      </Modal>
    </div>
  );
}