# Webpack 异步加载模块示例

## 运行
	
	  npm start

## 打包
	
	  npm run build

## 介绍
源码在 app 目录下

		main.js 入口文件

		module1-4.js 是四个 js 模块

		module1-4.css 是四个 css 模块

`根据以下思路阅读代码:`

1. __main.js__: 它先会以默认方式加载 common.css、main.css，之后以异步方式加载 module1; 那么两个 css 样式文件会打包在 style.css 文件中，main.js 会同其他公共脚本打包在 style.js 文件中，module1 则会打包成一个小包异步加载

1. __module1.js__: 它先加载调用 module2、module3，那么它俩会打包成一个包异步加载; 然后再加载调用 module4，且包名命名为 bundle

1. 所有 module 会附带 css 文件一起加载

> 注明：代码中的 setTimeout 仅仅是为了方便观察，无任何帮助作用
