import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { People } from '@mui/icons-material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        mb: 4
      }}
    >
      <Toolbar>
        <People sx={{ 
          mr: 2, 
          fontSize: 32,
          color: 'white',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
        }} />
        <Box>
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            component="h1" 
            fontWeight="700"
            color="white"
            sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            People Management System
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              opacity: 0.9,
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            N8N and PostgreSQL Integration
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;