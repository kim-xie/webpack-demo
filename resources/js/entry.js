//入口文件js
document.write('Im webpack quickstart </br>');
//引入js文件 按顺序加载
document.write(require('./module.js'));

//引入图片
var img1 = new Image();
var img2 = document.createElement('img');

img1.src = require('../img/no-works.jpg');
img2.src = require('../img/no-msg-bg.png');

//document.body.appendChild(img1);
document.body.appendChild(img2);

$("body").append(img1);
