/*
	loader: 1下载  2使用(配置)
	plugins: 1下载 npm i html-webpack-plugin -D
			2引用	const HtmlWebpackPlugin = require('html-webpack-plugin')
			3使用	new HtmlWebpackPlugin()
*/

const {resolve} =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
	entry:'./src/index.js',
	output:{
		filename:'built.js',
		path:resolve(__dirname,'build')
	},
	module:{
		rules:[]
	},
	plugins:[
		// html-webpack-plugin
		// 功能：默认创建一个空的HTML文件，引入打包输出后的所有资源
		new HtmlWebpackPlugin({
			// 复制 /src/index.html 文件，并自动引入打包后的所有资源
			template:'./src/index.html'
		})
	],
	mode:'development'
}