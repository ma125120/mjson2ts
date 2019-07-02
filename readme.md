## 安装

```javascript
yarn add mjson2ts 或者 npm install mjson2ts
```

## 使用
```javascript
根目录下新建tsg1.js,执行 yarn tsg1 或者 npm run tsg1

如果想要自定义文件名，可加上参数, --c 后跟上文件名即可
```

## 配置
```javascript
module.exports = {
  // 远程swagger文档地址
  url: 'http://api-alpha.heywoof.com/activity/v2/api-docs',

  // 输出的目录，默认为 './src/api'
  output: './src/api',

  // ajax请求封装的文件，可不填,
  staticPath: './request.ts',
}
```
