var config = require('../json/config.json');

//引入banner
import Banner from '../component/banner/banner.js';

const InitBanner = function(){
  //var bannerDom = document.getElementById('banner');
  var bannerDom = $('#banner');
  var banner = new Banner();

  alert(config.greetText);

  //bannerDom.innerHTML = banner.temp;
  bannerDom.html(banner.temp);
}

new InitBanner();
