/*
	css-->js-->图片-->html
*/

const {resolve} = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports={
	entry:'./src/js/index.js',
	output:{
		filename:'js/built.js',
		path:resolve(__dirname,'build')
	},
	module:{
		rules:[
			// 处理css文件，并单独提取成单独文件
			{
				test:/\.css$/,
				use:[
					miniCssExtractPlugin.loader,
					'css-loader',
					// 如果只使用loader的默认配置，只用写字符串就行，如果要修改配置，在对象里写
					{
						loader:'postcss-loader',
						options:{
							ident:'postcss'
						}
					}
				]
			},
			{
				test:/\.less$/,
				use:[
					miniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			},
			
			
		]
	},
	plugins:[
		new miniCssExtractPlugin({
			filename:'css/built.css'
		})
	],
	mode:'production'
}