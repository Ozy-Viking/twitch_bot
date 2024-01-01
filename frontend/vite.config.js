import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  var config = {
    plugins: [react()],
  }
  if (command === 'serve') {
    // dev specific config
    config = {
      ...config,
    }
  } else {
    // command === 'build'
    // build specific config
    config = {
      ...config,
      "build": {
        assetsDir: "static"
      }
    }
  }
  return config
})
// root: "./templates",
// base: "/docs/",
// build.assetsDir: "static"
