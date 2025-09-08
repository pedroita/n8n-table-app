import React from 'react';
import { 
  Grid, 
  Box, 
  Typography,
  Paper
} from '@mui/material';
import PersonCard from '../PersonCard';

const PersonGrid = ({ data, loading }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
        <Typography variant="h6" color="text.secondary">
          Carregando dados...
        </Typography>
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Paper 
        elevation={0} 
        sx={{ 
          p: 6, 
          textAlign: 'center', 
          bgcolor: 'grey.50',
          borderRadius: 3
        }}
      >
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Nenhum dado disponível
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Clique em "Executar" para buscar e carregar os dados
        </Typography>
      </Paper>
    );
  }

  return (
    <Grid container spacing={3}>
      {data.map((person, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <PersonCard person={person} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PersonGrid;