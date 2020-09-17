### 1.官网下载nodejs
	一直按下一步安装，默认安装在C:\Program Files\nodejs 下边
		node -v ; npm -v 查看是否安装成功
	在nodejs文件夹下新建node_cache和node_global两个文件夹
###2.配置环境变量
	系统变量(S)	新增Path	   		C:\Program Files\nodejs
				新建NODE_PATH	C:\Program Files\nodejs\node_global
	用户变量(U)  新增Path		C:\Program Files\nodejs\node_global
	
## 注释:如果上述两个步骤执行完，npm install下载模块报4048错误，再执行下边的步骤

###3.清除缓存
	删除 C:\Users\admin\AppData\Roaming\npm-cache 下的所有内容
	删除 C:\Users\admin\AppData\Roaming\npm 下的所有内容
	以管理员身份运行CMD，npm cache clean --force 清除npm缓存
	
	
	如果上述都不行的话执行下边的语句
	删除 C:\Users\admin\.npmrc 文件夹
	
