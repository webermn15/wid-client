const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		filename: 'index_bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
        	loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        	loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'}, 
          {loader: 'css-loader'}
        ]
      }
		]
	},
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
	mode: 'development'
}