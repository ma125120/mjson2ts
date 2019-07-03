const fs = require('fs-extra')
const path = require('path')
const { filter, getOutpurRoot, } = require('../util/index.js');
const { handleMultiReq } = require('./multi.js');
const get = require('lodash.get')
const getImports = require('./getImports.js');

function setPath(paths, { output = './src/api', staticPath, ajaxImportPath, } = {}, name) {
  const prefix = getOutpurRoot(output);
  
  const apis = Object.keys(paths);
  
  apis.map(url => {
    const api = paths[url];
    ['get', 'post', 'put', 'delete'].map(method => {
      const { summary, parameters, responses, } = api[method] || {};
      if (!summary) return ;
      
      // 请求类型的引用字符串
      let requestParams = parameters ? getMatchReqRef(get(parameters, `[0].schema.$ref`, '')) : '';
      requestParams = replaceList(requestParams)

      // 响应类型的引用字符串
      let response = responses['200'] && responses['200'].schema ? getMatchResRef(responses['200'].schema.$ref) : '';
      response = replaceList(response)
      // 非本公司后台可能的响应类型
      response = response || getResType(get(responses, `['200'].schema`))

      // 获取 api.ts 或 request文件的 引用路径
      const filePrefix = `../`.repeat(url.split('/').length - 2)
      // 获取 request文件的 引用路径
      let ajaxImport = ajaxImportPath || ((name ? `../` : '') + `${filePrefix}${getRequestFilename(staticPath)}`)
      if (/^[^\.]/g.test(ajaxImport)) {
        ajaxImport = `./${ajaxImport}`
      }

      const needImprots = getImports(parameters, responses, `${filePrefix}api`);

      let content = [];
      needImprots && content.push(needImprots);
      content = content.concat([
        `import request from '${ajaxImport}'`,
        ``,
      ]);

      if (needWriteReq(parameters)) {
        content.push(handleMultiReq(parameters, /* 是否去除请求外壳，默认为true */));
      }

      content = content.concat([
        `/**`,
        `* ${summary}`,
        `*/`,
        `export default function(param: ${requestParams || 'MyRequestType'}) {`,
        `\treturn request.${method}<${response}>('${parseUrlRequest(url)}', param)`,
        `}`,
      ])

      fs.outputFile(`${prefix}${name}${parseUrlFilePath(url)}${getFirstUpper(method)}.ts`, content.join('\n'));
    })
    // const method = api.post ? 'post' : 'get';
    
  })

  console.log(`${name || ''} 完成转换`)
}

const getMatchReqRef = (ref = '') => ref.replace(/\#\/definitions\/Request«(.+)»$/g, `$1`)
const getMatchResRef = (ref = '') => ref.replace(/\#\/definitions\//g, ``)

const resetRef = (ref) => {
  let type = ref.replace(/\[\]/g, '')
  if (['boolean', 'string', 'number'].includes(type)) return '';
  return type
};

const needWriteReq = (params = []) => !(params.length === 1 && get(params, `[0].schema.$ref`) && !get(params, `[0].type`))

const replaceList = (str) => filter(str).replace(/^List(.+)/g, `$1[]`)

const getRequestFilename = (staticPath) => staticPath ? path.win32.basename(staticPath).replace(/\.[tj]s/g, '') : 'interceptor'

const getResType = (val) => {
  if (!val) return 'string';
  let realType = 'string';

  let { type, } = val;
  let items = val.items

  if (items) {
    $ref = items.$ref;
    const type2 = items.type;
    if (type2) {
      realType = `${type2}`;
    } else if ($ref) {
      realType = filter($ref);
    }

    type == 'array' && (realType += '[]')
  }

  return realType;
}

const parseUrlRequest = (url = '') => url.replace(/\/\{\w+\}/g, '');
const parseUrlFilePath = (url = '') => url.replace('{', '').replace('}', '');
const getFirstUpper = (str) => str.replace(/^([a-z])/g, (s, $1) => $1.toUpperCase());

module.exports = setPath
