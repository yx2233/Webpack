/*
	把css文件从打包文件中提取成单独的css文件
	npm i mini-css-extract-plugin -D
	使用：
		引入		const MiniCssExtractPlugin = require('mini-css-extract-plugin');
		修改.css文件的module配置 将	'style-loader' 改为 MiniCssExtractPlugin.loader
		插件配置	new MiniCssExtractPlugin({})
	执行 webpack
*/ 


const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
	entry:'./src/js/index.js',
	output:{
		filename:'js/built.js',
		path:resolve(__dirname,'build')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					// 'style-loader',		// 创建style标签，放入页面的head中
					MiniCssExtractPlugin.loader,	//提取js中的css成单独文件
					'css-loader' 	// 将css文件整合到js文件中
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename:'css/built.css'	//对输出的文件进行重命名
		})
	],
	mode:'development'
}