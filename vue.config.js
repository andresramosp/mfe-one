const { defineConfig } = require('@vue/cli-service');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require("./package.json");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_REMOTES === 'local' ?
   // DEVELOPMENT
    'http://localhost:9999/' :
    // PRODUCTION
    'https://module-federation-mfe-one.herokuapp.com/',
  devServer: { port: 9999 },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      uniqueName: 'mfeone',
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'MfeOne',
        filename: 'remoteEntry.js',
        remotes: process.env.VUE_APP_REMOTES === 'local' ?
          // DEVELOPMENT
          {
            ModuleAuth: 'ModuleAuth@http://localhost:9898/remoteEntry.js',
            store: 'MfeOne@http://localhost:9999/remoteEntry.js',
            Shell: 'Shell@http://localhost:8080/remoteEntry.js'
          } :
          // PRODUCTION
          {
            ModuleAuth: 'ModuleAuth@https://module-federation-module-auth.herokuapp.com/remoteEntry.js',
            store: 'MfeOne@https://module-federation-mfe-one.herokuapp.com/remoteEntry.js',
            Shell: 'Shell@https://module-federation-mfe-consumer.herokuapp.com/remoteEntry.js'
          },
        exposes: {
          './MfeOne': './src/bootstrap.js',
          './SharedComponent': './src/components/SharedComponent',
          './SharedComponentGeneric': './src/components/SharedComponentGeneric',
          './store': './src/store/store.js'
        },
        shared: {
          ...require('./package.json').dependencies,
          vue: {
            singleton: true,
          },
          'element-plus': {
            singleton: true
          }
        },
      })
    ]
  }
})