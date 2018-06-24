const webpack = require('webpack'),
  nodeExternals = require('webpack-node-externals'),
  path = require('path')

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './index.js',
    libraryTarget: 'commonjs'
  },
  plugins: [ new webpack.DefinePlugin({ 'global.GENTLY': false }) ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: [ nodeExternals() ]
}
