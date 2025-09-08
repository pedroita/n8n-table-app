import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip,
  useTheme
} from '@mui/material';
import { 
  Email, 
  Phone, 
  Person 
} from '@mui/icons-material';

const PersonCard = ({ person, index }) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Person sx={{ mr: 1, color: 'primary.main', fontSize: 28 }} />
            <Typography variant="h6" component="h3" fontWeight="600">
              {person.Name}
            </Typography>
          </Box>
          <Chip 
            label={`#${person.ID || index + 1}`} 
            size="small" 
            color="primary" 
            variant="outlined"
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Email sx={{ fontSize: 20, mr: 1.5, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary" noWrap>
            {person.Email}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Phone sx={{ fontSize: 20, mr: 1.5, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {person.Phone}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PersonCard;