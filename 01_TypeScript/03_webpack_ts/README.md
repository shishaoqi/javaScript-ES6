# javaScript &&  ES6

## javaScript
此笔记是针对： https://wangdoc.com/javascript/



## ES6
此笔记是针对： https://wangdoc.com/es6/

### 执行的命令
```
npm init -y
```

### 下载依赖
```
npm install -D webpack@4.41.5 webpack-cli@3.3.10 webpack-dev-server@3.10.2 typescript@4.1.5 ts-loader@8.0.17 html-webpack-plugin@4.5.0 cross-env@7.0.3 clean-webpack-plugin@3.0.0

npm init -y
npm install -D webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin cross-env clean-webpack-plugin

npm install -D typescript
npm install -D webpack webpack-cli
npm install -D webpack-dev-server      启动开发服务器的
npm install -D html-webpack-plugin clean-webpack-plugin                      对html内容进行打包 / 清除之前打包好的js文件
npm install -D ts-loader    针对ts文件进行编译处理
npm install -D cross-env           涉及跨平台命令
```

### 配置打包命令
```
"dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
"build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
```

### 运行与打包
```
npm run dev
npm run build
```

### 错误解决
node:internal/crypto/hash:68
  this[kHandle] = new _Hash(algorithm, xofLen);

解决：
https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported


HLS指的是流媒体视频，m3u8是一个索引文件，记录了流媒体视频的片段信息。目前大多数网络视频都是 hls 流媒体视频。通过m3u8文件下载视频片段并将其整合为mp4文件正是FetchV的m3u8下载器正在做的工作。