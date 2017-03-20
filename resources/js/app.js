//引入banner
import Banner from '../component/banner/banner.js';

const InitBanner = function(){
  var bannerDom = document.getElementById('banner');
  var banner = new Banner();
  bannerDom.innerHTML = banner.temp;
}

new InitBanner();
