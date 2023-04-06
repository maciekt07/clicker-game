import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#f28705",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "Honey Clicker",
        description: "Honey Clicker Game",
        name: "Honey Clicker",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "logo384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Game",
            description: "Game Page",
            url: "/",
            icons: [
              {
                src: "honey-jar96.png",
                sizes: "96x96",
              },
            ],
          },
          {
            name: "About",
            description: "About Page",
            url: "/about",
            icons: [
              {
                src: "info.png",
                sizes: "96x96",
              },
            ],
          },
          {
            name: "Settings",
            description: "Settings Page",
            url: "/settings",
            icons: [
              {
                src: "settings.png",
                sizes: "96x96",
              },
            ],
          },
        ],
      },
    }),
  ],
});
