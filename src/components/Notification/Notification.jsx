import React from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import { snackbarStyle, alertStyle } from './styles';

const SlideTransition = (props) => <Slide {...props} direction="down" />;

const Notification = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={1000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      slots={{ transition: SlideTransition }}
      sx={snackbarStyle}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={alertStyle}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
