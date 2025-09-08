// styles/appTheme.js
import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
      light: '#34495e',
      dark: '#1a2530',
    },
    secondary: {
      main: '#e74c3c',
    },
    background: {
      default: '#0d0d0d',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default appTheme;
