const { defineConfig } = require('@vue/cli-service');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require("./package.json");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'https://module-federation-mfe-one.herokuapp.com/',
  devServer: { port: 9999 },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      uniqueName: 'mfeone',
    },
    // externals: [
    //   'moment'
    // ],
    plugins: [
      new ModuleFederationPlugin({
        name: 'MfeOne',
        filename: 'remoteEntry.js',
        remotes: {
          // ModuleAuth: 'ModuleAuth@http://localhost:9898/remoteEntry.js',
          ModuleAuth: 'ModuleAuth@https://module-federation-module-auth.herokuapp.com/remoteEntry.js',
          // store: 'MfeOne@http://localhost:9999/remoteEntry.js',
          store: 'MfeOne@https://module-federation-mfe-one.herokuapp.com/remoteEntry.js',
        },
        exposes: {
           './MfeOne': './src/bootstrap.js', 
           './SharedComponent': './src/components/SharedComponent',
           './SharedComponentGeneric': './src/components/SharedComponentGeneric',
           './store': './src/store/store.js'
        },
        shared: {
          vue: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.vue
          },
          // moment: {
          //   singleton: true,
          //   eager: false,
          // }
          ...require('./package.json').dependencies
        },
        // shared: require('./package.json').dependencies,
      })
    ]
  }
})