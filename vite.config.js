import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss()],
})



// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
//       },
//       colors: {
//         primary: '#000000',
//         secondary: '#1B1A55',
//         accent: '#535C91',
//         light: '#9290C3',
//       },
//     },
//   },
//   plugins: [require('daisyui')],
// };

