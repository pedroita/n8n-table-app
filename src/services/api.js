import axios from 'axios';

const API_BASE_URL = 'http://44.201.86.118:4000/api';
const N8N_BASE_URL = 'https://pedroitalocampos11.app.n8n.cloud/webhook';

export const fetchAndDecryptData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fetch-and-decrypt`, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching and decrypting data:', error);
    throw error;
  }
};

export const getPersonsList = async () => {
  try {
    const response = await axios.get(`${N8N_BASE_URL}/listapersons`, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching persons list:', error);
    throw error;
  }
};

export const truncateTable = async () => {
  try {
    const response = await axios.post(`${N8N_BASE_URL}/deletetabela`, {}, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error truncating table:', error);
    throw error;
  }
};
