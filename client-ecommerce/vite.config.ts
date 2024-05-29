import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
      port: 3003
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    plugins: [react()],
})