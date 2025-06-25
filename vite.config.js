import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Rg-creation/', // MUST match GitHub repo name exactly
  plugins: [react()],
});