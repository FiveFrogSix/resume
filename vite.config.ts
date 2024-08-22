import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@scss": fileURLToPath(new URL("./src/assets/scss", import.meta.url))
    }
  },
  test: {
    globals: true,
    watch: false,
    environment: "happy-dom"
  }
})
