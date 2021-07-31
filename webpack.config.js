const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

	//👮 development == 开发模式
	entry: {
		index: './lib/index.tsx'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	output: {
		path: path.resolve(__dirname, 'dist/lib'),
		library: 'Nico-Ui',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			},
		]
	},
};
