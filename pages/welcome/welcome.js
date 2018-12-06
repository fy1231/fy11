// pages/welcome/welcome.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    character: 0,
    bottombar: {
      text: "确认",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  change: function (e) {
    this.setData({ character: e.detail.current });
  },


  navig: function(){
    wx.navigateTo({
      url: "../home/home?character=" + this.data.character,
    })
  },

  right: function () {
    this.setData({ character:1 });
  },

  left: function () {
    this.setData({ character:0 });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})