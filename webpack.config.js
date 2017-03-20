//加载webpack内置的插件
var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	//应用上下文
	context: __dirname,
  //文件入口
  //有三种写法
  //1、entry: './resources/js/entry.js',
  //2、entry: ['./resources/js/entry1.js','./resources/js/entry2.js'],
  //3、entry: {js1:'./resources/js/entry1.js',js2:['./resources/js/entry1.js','./resources/js/entry2.js']},
  entry: {
  	main: './resources/js/entry.js',
  	css: './resources/js/css.js',
		component: './resources/js/app.js'
  },
  //文件出口
  output: {
  	path:'./dist',//文件出口的路径zoz
    filename: 'js/[name]-[chunkhash].js',//出口文件名称  --[name] --[hash] --[chunkhash] hash--只有里面的内容改变了hash值才会改变   跟版本控制有关
    publicPath: ''//上线后的出口文件url
  },
  module: {
    loaders: [
			//js加载器
			//babel-loader非常耗时间的加载器
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname,"./resources/"),//加载转换的路径'./resources/js/'
				exclude: path.resolve(__dirname,"./node_modules/"),//排除的路径'./node_modules/'
				query: { presets: ['latest'] }//将最近的几个ES版本的转换为浏览器可执行的JS
				//loaders: ['','']
			},
      //css加载器
      //postcss-loader --解决跨浏览器样式加载的问题    如果同时引入less或者sass则postcss需放在css-loader和less/sass-loader中间
      //如果样式表中有@import引入样式  则需要在css-loader后加参数css?importLoaders=1 1--代表import的个数
      //如果不是使用配置文件则可以这样写require('style!css!./style.css')
      {
				test: /\.css$/,
      	loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
      	//include: './resources/css/',//引入哪个路径下的css
      	//exclude: './node_modules/',//排除哪个路径下的css
      	//loaders: ["style","css","postcss"] --默认的加载顺序是从右往左
				//query: {''}
      },
			//less加载器
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader',
				//include: './resources/less/',//引入哪个路径下的less
				//exclude: './node_modules/',//排除哪个路径下的less
				//loaders: [""] --默认的加载顺序是从右往左
				//query: {''}
			},
			//scss加载器
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader',
				//include: './resources/sass/',//引入哪个路径下的sass
				//exclude: './node_modules/',//排除哪个路径下的sass
				//loaders: [""] --默认的加载顺序是从右往左
				//query: {''}
			},
			//html加载器
			{
				test: /\.html$/,
				loader: 'html-loader',
				//include: './resources/component/',//引入哪个路径下的css
				//exclude: './node_modules/',//排除哪个路径下的css
				//loaders: [""] --默认的加载顺序是从右往左
				//query: { name: 'component/[name].[ext]'}
			},
			//图片加载器
			//url-loader --是将图片的url转换为base64嵌入到内容页中，有效减少了http请求数    如果使用在大图片上打包时会时打包文件变大
			//使用url-loader如果图片超出limit的参数值时会自动调用file-loader
			//file-loader --直接引入打包后的url  适合使用在大的图片上
			//拼接参数的两种方式： url-loader?limit=2048  另外一种就是一个query对象的方式
      {
				test: /\.(jpg|png|jpeg|gif)$/,
        loader: 'url-loader',
        query: {limit: 2048, name: 'images/[name].[ext]?'}
      }
    ]
  },
	//Webpack 2.1.0-beta23 之后的config里不能直接包含自定义配置项
	// postcss: [
	// 	require('autoprefixer')({
	// 		broswers: ['last 5 versions']
	// 	})
	// ],
	plugins: [
    // banner插件
    new webpack.BannerPlugin('This file is created by kim'),
    // js压缩
    new webpack.optimize.UglifyJsPlugin({
	    compress: {
	      warnings: false,//压缩时没有警告
	    },
	    output: {
	      comments: false,//压缩后文件去掉js注释
	    }
    }),
    //htmlWebpackPlugin html文件自动关联打包后的js文件--不用手动添加打包后的js
    new htmlWebpackPlugin({
	   	template: 'webpack.html',
	   	filename: 'webpack.html',
	   	inject: false,
	   	title: 'webpack demo test',
	   	date: new Date(),
	   	//minify: {
	   	//	removeComments: true,//打包后删除html注释
	   	//	collapseWhitespace: true//打包后删除html空格
	   	//},
	   	chunks: ['main','css']//该模板引入的chunk
	   	//excludeChunks: ['component'], //排除的chunk
    }),
		new htmlWebpackPlugin({
	   	template: 'index.html',
	   	filename: 'index.html',
	   	inject: 'body',
	   	//title: 'webpack demo test',
	   	//date: new Date(),
	   	//minify: {
	   	//	removeComments: true,//打包后删除html注释
	   	//	collapseWhitespace: true//打包后删除html空格
	   	//},
	   	chunks: ['component','css']//该模板引入的chunk
	   	//excludeChunks: ['main','css'] //排除的chunk
    }),
		//Webpack 2.1.0-beta23 之后的config里不能直接包含自定义配置项
		new webpack.LoaderOptionsPlugin({
	    options: {
				postcss: [
				 	require('autoprefixer')({
				 		broswers: ['last 5 versions']
				 	})
				],
	      // devServer: {
	      //   contentBase: "./public", //本地服务器所加载的页面所在的目录
	      //   colors: true, //终端中输出结果为彩色
	      //   historyApiFallback: true, //不跳转
	      //   inline: true //实时刷新
	      // }
	    }
	  })
  ]
}
