const {resolve} =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	entry:'./src/index.js',
	output:{
		filename:'built.js',
		path:resolve(__dirname,'build')
	},
	module:{
		rules:[
			{
				// 打包css资源
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				// 打包其他资源(排除css,js,html资源)
				exclude:/\.(css|js|html|less)$/,
				loader:'file-loader',
				options:{
					name:'[hash:10].[ext]'
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	],
	mode:'development',
	
	// 开发服务器配置：用来自动化(自动编译，自动打开浏览器，自动刷新浏览器)
	// 下载：npm i webpack-dev-server
	// 特点：只会在内存中编译打包，不会有任何的输出
	// 启动devServer指令：npx webpack-dev-server
	devServer:{
		// 项目构建后的路径
		contentBase:resolve(__dirname,'build'),
		// 压缩
		compress:true,
		// 自动打包
		open:true,
		// 端口号
		port:3000
		
	}
}