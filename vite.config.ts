import path from 'node:path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    mode: 'production',
    plugins: [react(), tsConfigPaths()],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    css: {
        postcss: {
            plugins: [postcssNesting(), autoprefixer()]
        },
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: 'hidden',
        rollupOptions: {
            output: {
                entryFileNames: 'js/script.[hash].js',
                chunkFileNames: 'js/bundle.[hash].js',
                assetFileNames: 'assets/[hash].[ext]'
            }
        }
    }
});
