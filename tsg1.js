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