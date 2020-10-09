const {resolve} =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	entry:'./src/js/index.js',
	output:{
		filename:'js/built.js',
		path:resolve(__dirname,'built')
	},
	module:{
		rules:[
			/*
				eslint-loader eslint
				注意：只检查自己写的源代码，第三方库是不用检查的
				设置检查规则：
					在package.json中设置 eslintConfig
					"eslintConfig":{
						"extends":"airbnb-base"
					}
					airbnb --> eslint-config-airbnb-base eslint-plugin-import
			*/
		   {
			   test:/\.js$/,
			   exclude:/node_modules/,
			   loader:'eslint-loader',
			   options:{}
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


