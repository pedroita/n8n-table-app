import React, { useState } from 'react';
import { Container, CssBaseline, Box, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import PersonTable from './components/PersonTable';
import Notification from './components/Notification';
import { fetchAndDecryptData, getPersonsList, truncateTable } from './services/api';
import appTheme from './styles/appTheme';
import { rootBoxStyle, containerStyle, innerBoxStyle } from './styles/appStyles';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'info',
  });

  const showNotification = (message, severity = 'info') => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleExecute = async () => {
    setLoading(true);
    try {
      await fetchAndDecryptData();
      const personsData = await getPersonsList();
      setTableData(personsData);
      showNotification('Data loaded successfully!', 'success');
    } catch (error) {
      console.error('Error executing operation:', error);
      showNotification('Error loading data. Please check console.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    setLoading(true);
    try {
      const result = await truncateTable();
      if (result === true) {
        setTableData([]);
        showNotification('Table cleared successfully!', 'success');
      } else {
        throw new Error('Unexpected server response');
      }
    } catch (error) {
      console.error('Error clearing table:', error);
      showNotification('Error clearing table. Please check console.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box sx={rootBoxStyle}>
        <Header />

        <Container maxWidth="lg" sx={containerStyle}>
          <Box sx={innerBoxStyle}>
            <ActionButtons onExecute={handleExecute} onClear={handleClear} loading={loading} />
            <PersonTable data={tableData} loading={loading} />
          </Box>
        </Container>

        <Notification
          open={notification.open}
          message={notification.message}
          severity={notification.severity}
          onClose={handleCloseNotification}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
