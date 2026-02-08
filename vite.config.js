import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // Use /webminner/ for GitHub Pages, / for Vercel/Netlify
    base: process.env.GITHUB_ACTIONS ? '/webminner/' : '/',
    server: {
        port: 5173
    }
})

