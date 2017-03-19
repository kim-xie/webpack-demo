//入口文件js
document.write('IM webpack quickstart </br>')
//引入js文件 按顺序加载
document.write(require('./module.js'))
//引入图片
var img1 = new Image();
var img2 = document.createElement('img');

var src1 = require('../img/no-works.jpg');
var src2 = require('../img/no-msg-bg.png');

img1.src = src1;
img2.src = src2;

document.body.appendChild(img1);
document.body.appendChild(img2);
