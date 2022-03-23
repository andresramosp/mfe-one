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
          ModuleAuth: 'ModuleAuth@http://localhost:9898/remoteEntry.js'
        },
        exposes: {
           './MfeOne': './src/bootstrap.js', // implica wrapper en consumer que use el mount exportado por main
           './SharedComponent': './src/components/SharedComponent'
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