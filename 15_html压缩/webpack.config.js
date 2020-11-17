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
			
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			// 压缩html代码
			minify:{
				// 折叠空格
				collapseWhitespace:true,
				// 移除注释
				removeComments:true
			}
		})
	],
	// 将development改为production,生产环境js代码会自动压缩
	mode: 'development' 
}


