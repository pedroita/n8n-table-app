import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite conexões externas
    port: 5173, // ou a porta que você usa
    allowedHosts: [
      '21462accd395.ngrok-free.app', // 👈 adicione o host do ngrok
      'localhost',
      '127.0.0.1'
    ]
  }
});
