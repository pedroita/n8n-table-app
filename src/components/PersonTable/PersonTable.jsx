import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Chip,
  useTheme,
  useMediaQuery,
  TablePagination,
  alpha,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import {
  FilterList,
  Visibility,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Person as PersonIcon
} from '@mui/icons-material';

const PersonTable = ({ data, loading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (person) => {
    setSelectedPerson(person);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedPerson(null);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
        <Typography variant="h6" color="text.secondary">
          Loading data...
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
          borderRadius: 3,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`
        }}
      >
        <Typography variant="h6" color="text.secondary" gutterBottom>
          No data available
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Click "Execute" to fetch and load data
        </Typography>
      </Paper>
    );
  }

  // Dados paginados
  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 1 }}>
        <FilterList sx={{ mr: 1, color: 'primary.main' }} />
        <Typography 
  variant="h6" 
  fontWeight="600"
  sx={{ color: 'white' }} // 👈 sempre branco
>
  People List
</Typography>
        <Chip
          label={`${data.length} records`}
          size="small"
          color="primary"
          variant="filled"
          sx={{ 
            ml: { xs: 0, sm: 2 },
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
            color: 'white',
            fontWeight: '600'
          }}
        />
      </Box>

      {/* DESKTOP VIEW */}
      {isDesktop && (
        <TableContainer
          component={Paper}
          elevation={2}
          sx={{
            borderRadius: 3,
            overflow: 'auto',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.primary.light, 0.05)} 100%)`,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.15)}`
            }
          }}
        >
          <Table aria-label="people table" size="medium">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    width: '10%',
                    borderRight: `1px solid ${alpha('#fff', 0.2)}`,
                    textAlign: 'center'
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    width: '25%',
                    borderRight: `1px solid ${alpha('#fff', 0.2)}`
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    width: '35%',
                    borderRight: `1px solid ${alpha('#fff', 0.2)}`
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    width: '30%'
                  }}
                >
                  Phone
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((person) => (
                <TableRow
                  key={person.id}
                  hover
                  onClick={() => handleRowClick(person)}
                  sx={{
                    cursor: 'pointer',
                    '&:nth-of-type(even)': {
                      backgroundColor: alpha(theme.palette.primary.light, 0.03),
                    },
                    '&:last-child td, &:last-child th': { border: 0 },
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      transform: 'translateY(1px)'
                    }
                  }}
                >
                  <TableCell
  sx={{
    fontWeight: 'bold',
    color: 'white', // 👈 força a cor branca
    textAlign: 'center'
  }}
>
  #{person.id}
</TableCell>
                  <TableCell>
                    {person.nome || person.Name || 'Name not available'}
                  </TableCell>
                  <TableCell>
                    {person.email || person.Email || 'Email not available'}
                  </TableCell>
                  <TableCell>
                    {person.phone || person.Phone || 'Phone not available'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* MOBILE VIEW */}
      {!isDesktop && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {paginatedData.map((person) => (
            <Paper
              key={person.id}
              elevation={2}
              onClick={() => handleRowClick(person)}
              sx={{
                p: 2,
                borderRadius: 3,
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.primary.light, 0.05)} 100%)`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 12px ${alpha(theme.palette.primary.main, 0.15)}`
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                <Typography variant="h6" fontWeight="600" color="primary">
                  #{person.id}
                </Typography>
                <IconButton size="small" sx={{ color: 'primary.main' }}>
                  <Visibility />
                </IconButton>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PersonIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                <Typography variant="body1">
                  {person.nome || person.Name || 'Name not available'}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary" noWrap>
                  {person.email || person.Email || 'Email not available'}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">
                  {person.phone || person.Phone || 'Phone not available'}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      )}

      {/* PAGINATION */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
        labelDisplayedRows={({ from, to, count }) => 
          `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
        }
        sx={{ 
          mt: 2,
          '& .MuiTablePagination-toolbar': {
            flexWrap: 'wrap',
            justifyContent: 'center'
          }
        }}
      />

      {/* DETAIL DIALOG */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white'
        }}>
          Person Details
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          {selectedPerson && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">Name</Typography>
                  <Typography variant="body1">{selectedPerson.nome || selectedPerson.Name}</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">Email</Typography>
                  <Typography variant="body1">{selectedPerson.email || selectedPerson.Email}</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">Phone</Typography>
                  <Typography variant="body1">{selectedPerson.phone || selectedPerson.Phone}</Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>ID:</Typography>
                <Typography variant="body1">#{selectedPerson.id}</Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PersonTable;