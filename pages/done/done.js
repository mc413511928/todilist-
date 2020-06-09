// pages/done/done.js
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
    list = list.filter(item => item.isDone);
    this.setData({list});
  },

  unDoneHandle({ currentTarget: { dataset: { id } } }) {
    const list = wx.getStorageSync('task');
    list.find(item => item.id === id).isDone = false;
    wx.setStorageSync('task', list);
    this.render();
  },

  deleteHandle({ currentTarget: { dataset: { id } } }) {
    const list = wx.getStorageSync('task');
    list.splice(list.findIndex(item => item.id === id), 1);
    wx.setStorageSync('task', list);
    this.render();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.render();
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