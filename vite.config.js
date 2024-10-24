import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Elevate-E-commerce-task/",
  plugins: [react()],
  build:{
    target: "esnext", // or "es2019",
  },
})
