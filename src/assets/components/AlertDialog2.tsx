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

export default function Microbetwo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        2. Geobacter Sulfurreducens
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle className='font-bold' sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Microbe : Geobacter Sulfurreducens
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
            Documented Voltage(mV) : 500-600
          </Typography>
          <Typography gutterBottom>
            Documented Current Density(mA/cm2) : 17 [4], 23 [5], 14 [6]
          </Typography>
          <Typography gutterBottom>
            Example Reading(Voltage in mV, Current Density in mA/cm2) : 489, 11.2; 557, 18.7; 521,12.9; 473, 9.8; 582, 21.4;498, 15.1; 539, 10.7;571, 20.3; 462, 8.5; 514,16.9

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
