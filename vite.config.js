import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env': {
      VITE_GOOGLE_API_KEY: JSON.stringify(process.env.VITE_GOOGLE_API_KEY),
    },
  plugins: [react()],
  },
})
