import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/",
  plugins: [react()],
  build:{
    target: "esnext", // or "es2019",
  },
})
