const app = getApp()
const Config = require('../../config.js')
Page({
  data: {
    webViewUrl: '',
  },
  onLoad(options) {
    wx.showLoading({ title: '加载中' })
    const { userId, hubId, role } = options
    const token = decodeURIComponent(options.token)
    this.joinRoom({
      id: userId,
      hubId,
      role,
      token,
    })
  },
  // 退出房间
  quitRoom() {
    const { RCClient } = app.getService()
    RCClient.quitRoom().then((res) => {
      console.log('res:', res)
    })
  },
  // 创建或加入房间
  joinRoom(options) {
    const context = this
    const { RCClient } = app.getService()
    RCClient.joinRoom(options)
      .then((res) => {
        // 退出房间
        // setTimeout(() => {
        //   context.quitRoom()
        // }, 5000)
        context.setData({
          webViewUrl: res,
        })
      })
      .catch((err) => {
        console.log('err:', err)
        const { msg } = err
        wx.showToast({
          title: msg,
          icon: 'none',
          duration: 3000,
        })
        setTimeout(()=>{
          wx.navigateBack()
        },3000)
      })
      .finally(() => {
        setTimeout(() => {
          wx.hideLoading()
        }, 2000)
      })
  },
  // 播放录像
  playRecord(options) {
    const context = this
    const { RCClient } = app.getService()
    // 播放录像
    RCClient.playRecord({
      url: 'xxx/index.tsiwb',
      playHubId: '',
      ...options,
    })
      .then((res) => {
        context.setData({
          webViewUrl: res,
        })
      })
      .catch((err) => {
        console.log('err:', err)
      })
      .finally(() => {
        setTimeout(() => {
          wx.hideLoading()
        }, 1000)
      })
  },
  onMsg(e) {
    console.log('e:', e)
  },
})
