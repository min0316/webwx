//index.js
//获取应用实例
Page({
  data: {
    imgUrls: [
      '../../img/img-1.png',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    imgUrle:　[
      '../../img/img-6.png',
      '../../img/img-6.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  }
})