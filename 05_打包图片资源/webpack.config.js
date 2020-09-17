
const {resolve} = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/index.js',
	output:{
		filename:'built.js',
		path:resolve(__dirname,'build')
	},
	module:{
		rules:[
			{
				test:/\.less$/,		
				use:['style-loader','css-loader','less-loader'] 
			},
			{
				// 处理的是less,css等外部文件引入的图片
				test:/\.(png|jpg|gif)$/,
				// 下载 url-loader file-loader
				loader:'url-loader',
				options:{
					// 图片大小小于8kb,就会被base64处理
					// base64：
						// 优点:减少请求数量(减轻服务器压力)
						// 缺点:图片体积会更大(文件请求速度更慢)
					// base64在客户端本地解码所以会减少服务器压力，如果图片过大还继续采用base64编码会导致CPU调用率上升网页加载时变卡
					limit: 8 * 1024,
					// url-loader默认使用ES6模块化解析，而html-loader引入图片是common.js
					esModule: false,
					// 给图片进行重命名
					// [hash:10]取图片的hash的前10位
					// [ext]取文件的原来的扩展名
					name: '[hash:10].[ext]'
				}
			},
			{
				// 处理html文件中的images
				test:/\.html$/,
				loader:'html-loader'
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	],
	mode:'development'
}