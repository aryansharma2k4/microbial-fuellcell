import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Microbeone() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className='' variant="outlined" onClick={handleClickOpen}>
        1. Shewanella Oneidensis
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle className='font-bold' sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Microbe : Shewanella oneidensis
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Documented Voltage(mV) : 600 - 700
          </Typography>
          <Typography gutterBottom>
            Documented Current Density(mA/cm2) : 8.3 [1]1 12.1[2], 5.9[3]
          </Typography>
          <Typography gutterBottom>
            Example Reading(Voltage in mV, Current Density in mA/cm2) : 587, 4.2; 623, 7.8; 654,10.5; 512, 3.9; 698, 6.1;547, 2.8; 619, 9.2; 701,5.7; 578, 4.5; 632, 8.4

          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
