import React from 'react';
import { Box, CircularProgress, useTheme, useMediaQuery } from '@mui/material';
import { PlayArrow, Clear, Refresh } from '@mui/icons-material';
import { StyledButton } from './styles';

const ActionButtons = ({ onExecute, onClear, onReload, loading }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  const buttons = [
    { label: 'Execute', onClick: onExecute, icon: <PlayArrow /> },
    { label: 'Clear', onClick: onClear, icon: <Clear /> },
    { label: 'Reload', onClick: onReload, icon: <Refresh /> },
  ];

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        gap: 2, 
        justifyContent: 'center', 
        mb: 4,
        flexDirection: isMobile ? 'column' : 'row'
      }}
    >
      {buttons.map(({ label, onClick, icon }) => (
        <StyledButton
          key={label}
          variant="contained"
          onClick={onClick}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : icon}
          sx={{ minWidth: isMobile ? '100%' : 180 }} // 👈 sobrescreve se mobile
        >
          {label}
        </StyledButton>
      ))}
    </Box>
  );
};

export default ActionButtons;
