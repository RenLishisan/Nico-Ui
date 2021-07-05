const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	//👮 production == 生产模式
	//👮 development == 开发模式
	mode: 'development',
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
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "NicoUi",
			template: 'index.html'
		})
	],
	externals: {
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react',
			root: 'React'
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom',
			root: 'React-dom'
		}
	}

};
