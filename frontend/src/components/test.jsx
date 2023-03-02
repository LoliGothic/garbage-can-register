import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { red } from '@mui/material/colors';
import { border, fontSize, height, width } from '@mui/system';
// import "src/styles/register-button.css"



const buttonWarp = {
  // position: 'relative',
  height: "100vh"
}

const buttonStyle = {
  width: '60px',
  height: '60px',
  padding: '0',
  border: 'none',
  borderRadius: "50px",
  background: 'rgb(104, 241, 246)',
  WebkitBoxShadow: '0 3px 5px rgba(0, 0, 0, .3)',
  boxShadow: '0 3px 5px rgba(0, 0, 0, .3)',
  position: 'absolute',
  bottom: '0px',
  right: '0px'
}

const buttonStyle2 = {
  color: 'white',

}

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '741px',
  height: '421px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const content = {
  background: 'brown',
  width:'210px',
  height:'150px',
  paddingLeft:'0px',
  left:'0px',
  top:'0px',
  position: 'absolute',
}

const name1 = {
  color: 'white',
  fontSize: '20px',
}


const content2 ={
  background: 'brown',
  width:'210px',
  height:'332px',
  paddingLeft:'0px',
  left:'0px',
  bottom:'0px',
  position: 'absolute',
  color: 'white',
  fontSize:'20px'

}

const fileBOx ={
  right:'0px',
  position:'absolute',
  left: '270px',
  top:'105px'
}

const textBox ={
  height:'224px',
  width:'333px',
  bottom:'30px',
  left:'270px',
  background: 'rgb(181, 178, 178)',
  border: 'none',
  position: 'absolute',
}

const submitBox ={
  position: 'absolute',
  bottom: '30px',
  right:'30px',
  height:'50px',
  width:'125px',
  fontSize:'20px',
  borderRadius:'30px',
  background: 'rgb(181, 178, 178)',
  border:'none'
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={buttonWarp}>
      <Button sx={buttonStyle} onClick={handleOpen}><div style={buttonStyle2} class="btn btn--circle btn--circle-c btn--shadow"><i class="fas fa-arrow-up"></i></div></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={content}><i style={name1}>画像の添付</i></div>
          <div style={content2}>コメント</div>
          <input type="file" accept='image/png,image/jpg' style={fileBOx} />
          <input type="text" style={textBox} />
          <input type="submit" value="登録☞"  style={submitBox} />
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}