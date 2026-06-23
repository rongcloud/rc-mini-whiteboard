> [!WARNING]
> ⚠️ **暂停维护说明**
>
> 该工程已不再维护。

## 安装依赖

演示如何在小程序里接入互动白板功能。由于小程序原生不支持完整 Canvas 白板渲染，它通过 WebView 加载白板页面来实现。需要配合融云服务端配置 appkey 和 secret 才能使用。

```shell
npm i
```

## 构建 npm

> [微信小程序如何引入npm包？](https://developers.weixin.qq.com/community/develop/article/doc/0008aecec4c9601e750be048d51c13)
通过微信开发者工具菜单栏中 **'工具' -> '构建 npm'** 完成依赖包编译

## 修改配置

修改 `config.js` 文件，补全 `appkey`、`secret` 信息
