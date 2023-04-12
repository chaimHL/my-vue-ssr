const path = require('path')
const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./base.config')

module.exports = merge(base, {
  target: 'web',
  entry: './src/client/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, '../build/client')
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ]
})
