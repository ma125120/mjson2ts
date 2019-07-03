## 安装

```javascript
yarn add mjson2ts -D 或者 npm install mjson2ts -D
```

## 使用
```javascript
根目录下新建tsg1.js,执行 yarn tsg1 或者 npm run tsg1

如果想要自定义文件名，可加上参数, --c 后跟上文件名即可
```

## 配置
```javascript
module.exports = {
  // url: 可以是远程swagger json，也可以是本地json
  url: 'https://petstore.swagger.io/v2/swagger.json',
  // url: './test.json',

  // 输出文件的根目录
  output: './src/api',

  // 多个源
  // origins: [
  //   {
  //     name: 'self',
  //     url: 'https://petstore.swagger.io/v2/swagger.json',
  //   },
  //   {
  //     name: 'pet',
  //     url: 'https://petstore.swagger.io/v2/swagger.json',
  //   }
  // ],

  // 非必须， staticPath 为本地的ajax 封装文件，可在执行命令后移动到 ouput 声明的文件夹下。
  // staticPath: './request.ts',

  /* ajaxImportPath 项目中的 ajax request 文件的访问路径
  * ajaxImportPath 优先级高于 staticPath
  */
  // ajaxImportPath: '@http/request',
}
```

## ajax 暴露的应该是一个对象
1. 应该有 get, post, put, delete方法的实现
2. return 之后应该返回 *** Promise\<T> ***
3. 可参考下方的代码，配置只填写 url 和 output 时会自动复制一个request.ts到 output 目录下

```javascript
export default {
  get<T>(url: string, params) {
    const [reqUrl, option] = interceptRequest(url, params)
    option.method = 'get'
    return fetch(reqUrl, option).then<T>(interceptResponse)
  },

  post<T>(url: string, params) {
    const [reqUrl, option] = interceptRequest(url, params)
    option.method = 'post'
    return fetch(reqUrl, option).then<T>(interceptResponse)
  },

  put<T>(url: string, params) {
    const [reqUrl, option] = interceptRequest(url, params)
    option.method = 'put'
    return fetch(reqUrl, option).then<T>(interceptResponse)
  },

  delete<T>(url: string, params) {
    const [reqUrl, option] = interceptRequest(url, params)
    option.method = 'delete'
    return fetch(reqUrl, option).then<T>(interceptResponse)
  },
}
```

## 有问题可以提issue

1. 目前无法处理动态路由，如/order/:id/putImage这样的形式，
2. /order/:id 这样的还是可以处理的
