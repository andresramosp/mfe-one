const { defineConfig } = require('@vue/cli-service');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require("./package.json");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:9999/',
  devServer: { port: 9999 },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'MfeOne',
        filename: 'remoteEntry.js',
        exposes: {
           './MfeOne': './src/bootstrap.js' // implica wrapper en consumer que use el mount exportado por main
          //'./mainComponent': './src/components/MainComponent.vue'
        },
        // shared: {
        //   vue: {
        //     eager: true,
        //     singleton: true,
        //     requiredVersion: deps.vue
        //   },
        //   'element-plus': {
        //     eager: true
        //   }
        // },
        shared: require('./package.json').dependencies,
      })
    ]
  }
})