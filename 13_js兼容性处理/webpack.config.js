const {
	resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'js/built.js',
		path: resolve(__dirname, 'built')
	},
	module: {
		rules: [
			/*
				js兼容性处理:babel-loader  @babel/core
					1.基本的兼容性处理--> @babel/preset-env
					问题：只能处理基本的语法，如箭头函数;不能处理高级语法，如promise
					2.全部的js兼容性处理--> @babel/polyfill
					问题：体积太大了
					3.需要做兼容性处理的按需加载-->core-js
					
					
				
			*/
			{
				test:/\.js$/,
				loader:"babel-loader",
				exclude:/node_modules/,
				options:{
					// 预设：指示babel做怎样的兼容性处理
					presets:[
						[
							'@babel/preset-env',
							{
								// 按需加载
								useBuiltIns:'usage',
								// 指定core-js版本
								corejs:{
									version:3
								},
								// 指定浏览器兼容至哪个版本
								targets:{
									chrome:'60',
									firefox:'60',
									ie:'9',
									safari:'10',
									edge:'17'
								}
							}
						]
					]
				}
			}
			
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	mode: 'development' 
}


