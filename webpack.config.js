//加载webpack内置的插件
var webpack = require('webpack')

module.exports = {
  //文件入口
  entry: './resources/js/entry.js',
  //文件出口
  output: {
    filename: './dist/js/[name].js'
  },
  module: {
    loaders: [
      //css加载器
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      //图片加载器
      {  test: /\.(jpg|png|jpeg|gif)$/,
         loader: 'url-loader',
         query: {limit: 4096, name: './dist/images/[name].[ext]?'}
      }
    ]
  },
  plugins: [
    //banner插件
    new webpack.BannerPlugin('This file is created by kim'),
    // js压缩
    new webpack.optimize.UglifyJsPlugin({
     compress: {
       warnings: true
     }
   }),
  ]
}
