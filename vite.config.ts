import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Set base path for GitHub Pages deployment
      // If deploying to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'
      // If deploying to https://<USERNAME>.github.io/, set base to '/'
      base: process.env.GITHUB_ACTIONS ? '/Portfolio/' : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
