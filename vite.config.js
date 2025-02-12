import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
// https://vite.dev/config/
export default defineConfig({
    base: './',
    resolve: {
        alias: {
            '@': '/src/',
        },
    },
    plugins: [vue(),
        Pages({
            pagesDir: 'src/pages',
            extensions: ['vue'],
            exclude: ["**/components/*.vue"],
        }),
    ],
    optimizeDeps: {
        esbuildOptions: {
            target: ['es2020', 'safari14'],
        },
    },
});
