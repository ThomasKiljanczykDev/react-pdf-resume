import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    mode: 'production',
    plugins: [react()],
    resolve: {
        tsconfigPaths: true
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: 'hidden',
        rolldownOptions: {
            output: {
                entryFileNames: 'js/script.[hash].js',
                chunkFileNames: 'js/bundle.[hash].js',
                assetFileNames: 'assets/[hash].[ext]'
            }
        }
    }
});
