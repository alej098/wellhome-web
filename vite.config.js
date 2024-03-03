import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        registerType: 'autoUpdate',
        devOptions: {
          enabled: false
        },
        manifest: {
          registerType: 'prompt',
          includeAssets: ['favicon.ico', 'android-chrome-512x512.png', 'apple-touch-icon.png'],
          name: "WellHome App",
          short_name: "WellHome",
          description: "Administrador de Condominios",
          lang: "es",
          theme_color: '#ffffff',
          background_color: '#d4d4d4',
          display: "standalone",
          scope: '/',
          start_url: "/",
          orientation: 'portrait',

          icons: [{
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'favicon'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: '/favicon.ico',
            sizes: '64x64',
            type: 'image/x-icon',
            purpose: 'favicon',
          },

          ],

        },
      }),
  ],
  server: { port: 4000 },

});
