/*
	webpack的配置文件
	webpack.config.js 是依赖node.js的common.js模块的，所以用 module.export 导出
*/
// resolve用来拼接绝对路径的方法  nodejs核心模块path
const {resolve} = require('path')
module.exports = {
	// 入口起点文件
	entry:'./src/index.js',
	// 输入文件
	output:{
		// 输出文件名
		filename:'built.js',
		// 输出路径
		// __dirname node.js的变量，代表当前文件(wepack.config.js)的目录(03_打包样式资源)的绝对路径
		path:resolve(__dirname,'build')
	},
	// loader的配置
	module:{
		rules:[
			{
				// 匹配哪些文件
				test:/\.css$/,
				// 使用哪些loader进行处理 
				use:[
					// 创建style标签，将js中的样式资源插入进去，添加到head中生效
					'style-loader',
					// 将CSS文件变成commonjs模块加载到js中，里面的内容是样式字符串
					'css-loader'
				]
			},
			{
				test:/\.less$/,
				use:[
					'style-loader',
					'css-loader',
					// 将less文件编译成css文件
					// 需要下载 less-loader和less
					'less-loader'
				]
			}
		]
	},
		
	
	// plugins
	// mode
	mode:'development'
}






