const app = getApp()
const Config = require('../../config.js')
const { apps, roles } = Config
Page({
  data: {
    apps,
    webViewUrl: '',
    appkeys: apps.map((item) => item.appkey),
    appkeyIndex: 0,
    isHiddenTip: true,
    roles,
    roleIndex: 0,
    joinRoomInfo: {
      userId: '',
      token: '',
      hubId: '',
    },
  },
  appkeyChange(e) {
    const appkeyIndex = parseInt(e.detail.value)
    this.setData({ appkeyIndex })
  },
  roleChange(e) {
    const roleIndex = parseInt(e.detail.value)
    this.setData({ roleIndex })
  },
  onInput(e) {
    const {
      target: {
        dataset: { type },
      },
      detail: { value },
    } = e
    const {
      data: { joinRoomInfo },
    } = this

    if (type === 'userId' || type === 'token' || type === 'hubId') {
      joinRoomInfo[type] = value
      this.setData({
        joinRoomInfo,
      })
    }
  },
  joinRoom() {
    let context = this
    let {
      data: {
        roleIndex,
        appkeyIndex,
        roles,
        joinRoomInfo: { userId, hubId, token },
      },
    } = context
    const { appkey } = apps[appkeyIndex]
    const { id: role } = roles[roleIndex]
    app.setServiceConf(appkey)
    const tokenC = encodeURIComponent(token)
    wx.navigateTo({
      url: `../play/index?token=${tokenC}&userId=${userId}&appkey=${appkey}&role=${role}&hubId=${hubId}`,
    })
  },
})
