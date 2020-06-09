// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewHeight: 0,
    list: []
  },

  render() {
    // 使用本地存储读取到完整列表，并筛选出未完成部分
    let list = wx.getStorageSync('task');
    list = list.filter(item => !item.isDone);
    this.setData({list});
  },

  doneHandle({ currentTarget: { dataset: { id } } }) {
    const list = wx.getStorageSync('task');
    list.find(item => item.id === id).isDone = true;
    wx.setStorageSync('task', list);
    this.render();
  },

  toAddHandler() {
    wx.navigateTo({
      url: '/pages/add/add'
    });
  },

  toDoneHandler() {
    wx.navigateTo({
      url: '/pages/done/done'
    });
  },

  setHeight() {
    const {windowHeight} = wx.getSystemInfoSync();
    this.setData({
      viewHeight: windowHeight - 80
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.render();
    this.setHeight();
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
    this.render();
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