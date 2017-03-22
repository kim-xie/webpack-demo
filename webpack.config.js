//加载webpack内置的插件
var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	//应用上下文
	context: __dirname,
  //文件入口
  //有三种写法
  //1、entry: './resources/js/entry.js',
  //2、entry: ['./resources/js/entry1.js','./resources/js/entry2.js'],
  //3、entry: {js1:'./resources/js/entry1.js',js2:['./resources/js/entry1.js','./resources/js/entry2.js']},
  entry: {
		// 公共资源
		// vendor: [
		//     'jquery',
		//     'bootstrap/css/bootstrap.css',
		//     'bootstrap/js/bootstrap.js',
		// ],
		// 热模块替换
		// 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080',
  	main: path.join(__dirname,'resources/js/entry.js'),
  	css: path.join(__dirname,'resources/js/css.js'),
		component: path.join(__dirname,'resources/js/app.js')
  },
  //文件出口
  output: {
  	path: path.join(__dirname,'dist'),//文件出口的路径zoz
    filename: 'js/[name]-[chunkhash].js'//出口文件名称  --[name] --[hash] --[chunkhash] hash--只有里面的内容改变了hash值才会改变   跟版本控制有关
    //publicPath: path.join(__dirname,"/dist"), //上线后的出口文件url
		//chunkFilename: '' //
  },
  module: {
    loaders: [
			//将jquery暴露到全局  引入时参考一下引入方式
			//import $ from 'expose?$!jquery'
			//import 'jquery-ui' //插件可用
			// {
		  //   test: require.resolve('jquery'),
		  //   loader: 'expose?jQuery!expose?$'
		  // },

			//矢量字体图标
			// {
      //   test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      //   loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
			// },

			//js加载器
			//babel-loader非常耗时间的加载器
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname,"resources"),//加载转换的路径'./resources/js/'
				exclude: path.resolve(__dirname,"node_modules"),//排除的路径'./node_modules/'
				query: { presets: ['latest'] }//将最近的几个ES版本的转换为浏览器可执行的JS
				//loaders: ['','']
			},

      //css加载器
      //postcss-loader --解决跨浏览器样式加载的问题    如果同时引入less或者sass则postcss需放在css-loader和less/sass-loader中间
      //如果样式表中有@import引入样式  则需要在css-loader后加参数css?importLoaders=1 1--代表import的个数
      //如果不是使用配置文件则可以这样写require('style!css!./style.css')
      {
				test: /\.css$/,
      	loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?importLoaders=1!postcss-loader' }) //'style-loader!css-loader?importLoaders=1!postcss-loader',//
      	//include: './resources/css/',//引入哪个路径下的css
      	//exclude: './node_modules/',//排除哪个路径下的css
      	//loaders: ["style","css","postcss"] --默认的加载顺序是从右往左
				//query: {''}
      },

			//less加载器
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!less-loader' })//'style-loader!css-loader!postcss-loader!less-loader'
				//include: './resources/less/',//引入哪个路径下的less
				//exclude: './node_modules/',//排除哪个路径下的less
				//loaders: [""] --默认的加载顺序是从右往左
				//query: {''}
			},

			//scss加载器
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!sass-loader' })//'style-loader!css-loader!postcss-loader!sass-loader'
				//include: './resources/sass/',//引入哪个路径下的sass
				//exclude: './node_modules/',//排除哪个路径下的sass
				//loaders: [""] --默认的加载顺序是从右往左
				//query: {''}
			},

			//html加载器
			{
				test: /\.html$/,
				loader: 'html-withimg-loader!html-loader'//导入时html代码为字符串
				//include: './resources/component/',//引入哪个路径下的html
				//exclude: './node_modules/',//排除哪个路径下的html
				//loaders: [""] --默认的加载顺序是从右往左
				//query: { name: 'component/[name].[ext]'}
			},

			//图片加载器
			//url-loader --是将图片的url转换为base64嵌入到内容页中，有效减少了http请求数    如果使用在大图片上打包时会时打包的js文件变大
			//使用url-loader如果图片超出limit的参数值时会自动调用file-loader
			//file-loader --直接引入打包后的url  适合使用在大的图片上
			//拼接参数的两种方式： url-loader?limit=2048  另外一种就是一个query对象的方式
			//在控件中引入图片最好引用绝对地址  或者'${require('../../../...jpg')}'
			//image-webpack-loader 图片压缩加载器
      {
				test: /\.(jpg|png|jpeg|gif)$/i,
				loaders: ['url-loader?limit=2048&name=images/[name]-[hash:5].[ext]','image-webpack-loader']
        //loader: 'url-loader',
        //query: {limit: 2048, name: 'images/[name].[ext]'},
				//include: './resources/component/',//引入哪个路径下的img
				//exclude: './node_modules/',//排除哪个路径下的img
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
		//热模块替换
		// new webpack.HotModuleReplacementPlugin(),

		//打开浏览器插件
		new OpenBrowserPlugin({
      url: 'http://localhost:8080/dist/index.html'
    }),

    // banner插件
    new webpack.BannerPlugin('This file is created by kim'),

		//单独使用link标签加载css并设置其路径  通过 style 标签引入样式可能会让页面的代码看起来非常的庞大非常的凌乱，有时候我们需要将所有的样式导出到一个独立的样式文件，然后通过 link 标签引入样式文件。
		new ExtractTextPlugin("css/[name].css"),

		//多个 html共用一个js文件(chunk)，可用CommonsChunkPlugin
		//可生成多个CommonsChunkPlugin   提取公共部分文件
		// new webpack.optimize.CommonsChunkPlugin({
    //   name: "common",
    //   filename: "js/common.js",
    // 	 chunks: ['main','css'],
		//   minChunks : 3,//被3个入口所引用的模块将会被视为公共代码打包到common中
    // }),

		//加载全局jquery 将变量当作全局模块 在各个模块中引入var $ = require("jquery");  如果文件来自CDN就是在script标签中引入
		// externals: { jquery: "jQuery" },

		// 使用别名加载全局jquery 这个插件将jquery暴露给所有模块，其它模块不用再显式require('jquery')了；只要模块的代码中出现了$，webpack就会自动将jQuery注入。
    new webpack.ProvidePlugin({
			 $ : "jquery" ,
			 jQuery : "jquery",
			 'window.jQuery': 'jquery',
       'window.$': 'jquery'
		}),

    // js压缩
    // new webpack.optimize.UglifyJsPlugin({
	  //   compress: {
	  //     warnings: false,//压缩时没有警告
	  //   },
	  //   output: {
	  //     comments: true,//压缩后文件去掉js注释
	  //   },
		//  minimize: true,
		// 	except: ['$super', '$', 'exports', 'require'] //排除关键字
    // }),

    //htmlWebpackPlugin html文件自动关联打包后的js文件--不用手动添加打包后的js
    new htmlWebpackPlugin({
	   	template: path.join(__dirname,'webpack.ejs'),//在进行插件配置的时候，需要将你选择作为template的文件改为ejs。html-webpack-plugin会将ejs的模板文件解析为html并输出。
	   	filename: path.join(__dirname,'dist/webpack.html'),
	   	inject: false,
	   	title: 'webpack demo test',
	   	date: new Date(),
			showErrors: true,//如果传入true（默认），错误信息将写入html页面。
			chunks: ['main','css']//该模板引入的chunk
	   	//excludeChunks: ['component'], //排除的chunk
			//hash: true,//如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
			//cache: true,//如果传入true（默认），只有在文件变化时才 发送（emit）文件。
			//chunksSortMode: ,在chunk被插入到html之前，你可以控制它们的排序。允许的值 ‘none’ | ‘auto’ | ‘dependency’ | {function} 默认为‘auto’.
			//xhtml: ,//用于生成的HTML文件的标题。
			//favicon: ,//给定的图标路径，可将其添加到输出html中。
	   	//minify: {
	   	//	removeComments: true,//打包后删除html注释
	   	//	collapseWhitespace: true//打包后删除html空格
	   	//},
  	}),

		//加了 html-loader之后会正常解析html文件作为模版，就会直接把 <%= htmlWebpackPlugin.options.title %>解析成字符串。
		new htmlWebpackPlugin({
	   	template: path.join(__dirname,'index.ejs'),//在进行插件配置的时候，需要将你选择作为template的文件改为ejs。html-webpack-plugin会将ejs的模板文件解析为html并输出。
	   	filename: path.join(__dirname,'dist/index.html'),
	   	inject: 'body',
	   	title: 'webpack template',
			showErrors: true,
	   	chunks: ['component','css']//该模板引入的chunk
			//excludeChunks: ['main','css'],//排除的chunk
	   	//date: new Date(),
	   	//minify: {
	   	//	removeComments: true,//打包后删除html注释
	   	//	collapseWhitespace: true//打包后删除html空格
	   	//},
    }),

		//Webpack 2.1.0-beta23 之后的config里不能直接包含自定义配置项
		new webpack.LoaderOptionsPlugin({
	    options: {
				postcss: [//跨浏览器加不兼容样式前缀
				 	require('autoprefixer')({
				 		broswers: ['last 5 versions']
				 	})
				],
	      devServer: {
	         contentBase: path.join(__dirname,"dist"), //本地服务器所加载的页面所在的目录
	         colors: true, //终端中输出结果为彩色
	         historyApiFallback: true, //不跳转
	         inline: true, //实时刷新
					 hot: true, //启动热替换
					 progress: true, //显示进度条
				  //  port : 7777, //指定端口
				  //  proxy :{ //使用代理
			    //     '/proxy/*':{
			    //         target : 'http://localhost:8082',
			    //         secure : false
			    //     }
			    //  }
	       }
	    }
	  })
  ],

	//代码调式和打包速度  Source map就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。压缩后可方便找出出错的位置
	//有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。
	//devtool: 'eval-source-map',

	//文件路径的指向
	// resolve: {
	//		 root: path.resolve(__dirname),
  //     moduledirectories:["web_loaders", "web_modules", "node_loaders", "node_modules"],
	//		 packageMains: ["webpackLoader", "webLoader", "loader", "main"],
  //     extensions: [".js", ".jsx","json"],
  //     alias: {
  //         'jquery': __dirname + 'resources/js/jquery-vendor.js',//在各个模块中引入var $ = require("jquery");  如果文件在本地,使用它
  //     }
  // },

	//debug: true,

	// node: {
  //   console: false,
  //   global: true,
  //   process: true,
  //   Buffer: true,
  //   __filename: "mock",
  //   __dirname: "mock",
  //   setImmediate: true
	// }

}
