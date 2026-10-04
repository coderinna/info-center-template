import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      plugins: [react(), 
        svgr()],
      server: {
        port: 3000,
        strictPort: true,
        https: {
          key: fs.readFileSync(path.resolve(__dirname, '/home/linux-computer/GitHub/certs/dev/localhost-key.pem')),
          cert: fs.readFileSync(path.resolve(__dirname, '/home/linux-computer/GitHub/certs/dev/localhost.pem')),
        },
        proxy: {
          '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            secure: false,
          },
        },
      },
    };
  } else {
    return {
      plugins: [react(), svgr()],
      build: {
        sourcemap: false,  
        outDir: 'build',   
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                return 'vendor';
              }
            },
          },
        },
      },
    };
  }
});