const path = require('path');
const postCssPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    publicPath: '/assets/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', { loader: 'postcss-loader', options: { plugins: postCssPlugins } }]
    }]
  }
};