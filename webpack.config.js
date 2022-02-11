const path = require('path');

module.exports = {
 module: {

    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  entry: {
    'dist/app': path.resolve(__dirname, '/public/app_src.js'),
    'dist/auth_app': path.resolve(__dirname, '/public/auth_app_src.js'),
    'dist/signin_app': path.resolve(__dirname, '/public/components/sign_in/signin_app_src.js'),
    'dist/administrator': path.resolve(__dirname, '/public/administrator_src.js'),
  },
  devtool: 'source-map',
  mode: "development",
  watch: true,
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js'
  },
};