/*
	css-->js-->图片-->html
*/

const {resolve} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin')

// 默认的环境是生产环境，需要开发环境需要写下边的语句。
// process.env.NODE_ENV='development'

// 复用loader
const commonCss=[
	miniCssExtractPlugin.loader,
	'css-loader',
	// 如果只使用loader的默认配置，只用写字符串就行，如果要修改配置，在对象里写
	{
		// 还需要在package.json中定义browerslist
		loader:'postcss-loader',
		options:{
			ident:'postcss',
			plugins:()=>[
				require('postcss-preset-env')()
			]
		}
	}
]

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
				use:[...commonCss]
			},
			{
				test:/\.less$/,
				use:[...commonCss,'less-loader']
			},
			/*
				正常来讲，一个文件只能被一个loader处理，
				当要被多个loader处理，要指定执行顺序：
				先执行eslint(语法检查),再执行babel(兼容性处理)
				enforce:'pre'
			*/
			{
				// js语法检查，还需要在package.json中设置eslintConfig设置
				test:/\.js$/,
				exclude:/node_modules/,
				// 优先执行
				enforce:'pre',
				loader:'eslint-loader',
				options:{
					fix:true
				}
			},
			{
				// js兼容性处理
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				options:{
					presets:[
						[
							'@babel/preset-env',
							{
								useBuiltIns:'usage',
								corejs:{version:3},
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
			},
			{
				test:/\.(png|jpg|gif)$/,
				loader:'url-loader',
				options:{
					limit:8*1024,
					name:'[hash:10].[ext]',
					outputPath:'imgs',
					// 'url-loader'使用的是ES6模块，需要把ES6关掉，与common.js保持一致
					esModule:false
				}
			},
			{
				// 处理html中的图片
				test:/\.html$/,
				loader:'html-loader',//这个loader使用的是common.js
			},
			{
				// 处理其他资源
				exclude:/\.(js|css|less|png|jpg|gif)/,
				loader:'file-loader',
				options:{
					outputPath:'media'
				}
			}
		]
	},
	plugins:[
		new miniCssExtractPlugin({
			filename:'css/built.css'
		}),
		new optimizeCssAssetsWebpackPlugin(),
		HtmlWebpackPlugin({
			template:'./src/index.html',
			// html压缩性处理
			minify:{
				// 去除空格
				collapseWhitespace:true,
				// 去除注释
				removeComments:true
			}
		})
	],
	mode:'production'
}



/*
	css:样式处理-->css成独立文件-->css兼容性处理-->css压缩
*/