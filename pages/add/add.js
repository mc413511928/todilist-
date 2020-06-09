// pages/add/add.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: '',
        comment: ''
    },

    inputChange({ currentTarget: { dataset: { name } }, detail: { value } }) {
        this.setData({
            [name]: value
        });
    },

    addHandler() {
        const {content, comment} = this.data;
        if (!content.trim()) {
            wx.showToast({
                title: '请输入内容！',
                icon: 'none'
            });
            this.setData({
                content: ''
            });
            return;
        }
        // 任务项的数据对象
        const todo = {
            id: Math.random() + '',
            dateTime: this.formatTime(new Date()),
            content,
            comment,
            isDone: false
        }
        let list = wx.getStorageSync('task') || [];
        list = list instanceof Array ? [...list, todo] : [todo];
        wx.setStorageSync('task', list);
        console.log(wx.getStorageSync('task'));
        wx.showToast({
            title: '添加任务成功',
            icon: 'success'
        });
        this.setData({
            content: '',
            comment: ''
        });
        wx.navigateBack({ delta: 1 });
    },

    formatTime: function(date) {
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        var hour = date.getHours()
        var minute = date.getMinutes()
        var second = date.getSeconds()
        return year+'.'+month+'.'+day+' '+hour+'.'+minute+'.'+second;
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
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