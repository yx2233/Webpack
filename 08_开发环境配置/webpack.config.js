/*
	开发环境配置：能让代码运行
	运行项目代码：
		webpack		会将打包结果输出去
		npx webpack-dev-server		只会在内存中进行打包，不会输出
*/
/*
	css,
	less,
	html,
	图片——外部css图片,html中的图片
*/

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
	entry:'./src/js/index.js',
	output:{
		filename:'js/built.js',
		path:resolve(__dirname,'build')
	},
	module:{
		rules:[
			// loader的配置
				// css资源打包完成后在built.js中
			{
				// 处理less资源
				test:/\.less$/,
				use:['style-loader','css-loader','less-loader']
			},
			{
				// 处理CSS资源
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				// 打包外部文件引用的img资源
				test:/\.(png|jpg|gif)$/,
				loader:'url-loader',
				options:{
					limit: 8 * 1024,
					name:'[hash:10].[ext]',
					// 关闭ES6模块化
					esModule:false,
					outputPath:'img'
				}
			},
			{
				// 处理html中的图片资源
				test:/\.html$/,
				loader:'html-loader',
			},
			{
				// 处理其他资源
				exclude:/\.(html|css|less|js|jpg|png|gif)$/,
				loader:'file-loader',
				options:{
					name: '[hash:10].[ext]',
					outputPath:'media'
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	],
	// 开发服务器配置
	devServer:{
		contentBase:resolve(__dirname,'build'),
		compress:true,
		port:3000,
		open:true
	},
	mode:'development'
}