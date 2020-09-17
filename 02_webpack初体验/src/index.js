/*
	index.js：webpack打包的入口文件
	打包指令：
		开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
				webpack将 index.js文件作为入口文件进行打包，打包之后输出到built.js文件夹中，打包环境是开发环境
		生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
				webpack将 index.js文件作为入口文件进行打包，打包之后输出到built.js文件夹中，打包环境是生产环境
	
	结论：
		webpack能处理js/json资源，不能处理css/img等其他资源
		生产环境和开发环境都能将ES6模块编译为浏览器可识别的模块
		生产环境比开发环境多一个压缩js代码
*/

function add(x,y){
	return x+y;
}
console.log(add(1,2));


import data from './data.json' //ES6语法
console.log(data);


// import './index.css'

