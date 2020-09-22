// 打包所有的资源
const {resolve} = require('path')
module.exports ={
	entry:'./src/index.js',
	output:{
		filename:'built.js',
		path:resolve(__dirname,'build')
	},
	module:{
		rules:[
			{
				// 打包less资源
				test:/\.less/,
				user:['style-loader','css-loader','less-loader']
			}
		]
	},
	plugins:[
		
	],
	mode:'development'
}