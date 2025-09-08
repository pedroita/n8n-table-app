import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  py: 12,
  px: 32,
  fontSize: '1rem',
  fontWeight: 600,
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
  boxShadow: `0 4px 8px ${theme.palette.primary.main}40`,
  transition: 'all 0.3s ease',
  minWidth: 180,
  '&:hover': {
    boxShadow: `0 6px 12px ${theme.palette.primary.main}60`,
    transform: 'translateY(-2px)',
  },
}));
