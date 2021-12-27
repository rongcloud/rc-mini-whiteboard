const RCWhiteboard = require('@rongcloud/whiteboard')
module.exports = ({ appkey }) => {
  const RCClient = RCWhiteboard.init({
    appkey,
  })
  return {
    RCClient,
  }
}
