const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@styles": path.resolve(__dirname, "src/styles")
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData:  '@import "@/styles/main.scss";',
      }
    }
  }
})
