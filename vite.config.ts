import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Optional but safe
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
