const fs = require('fs-extra')
const path = require('path')
const { filter, getOutpurRoot, } = require('../util/index.js');
const { handleMultiReq } = require('./multi.js');
const get = require('lodash.get')
const getImports = require('./getImports.js');

function setPath(paths, { output = './src/api', staticPath, ajaxImportPath, } = {}, name) {
  const prefix = getOutpurRoot(output);
  
  const apis = Object.keys(paths);
  const childPaths = [];
  const urls = [];
  
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
      // // 非本公司后台可能的响应类型
      response = response || getResType(get(responses, `['200'].schema`))

      // 获取 api.ts 或 request文件的 引用路径
      const filePrefix = `../`.repeat(url.split('/').length - 2)
      const myPrefix = ((name ? `../` : '') + filePrefix) || './';
      // 获取 request文件的 引用路径
      
      let ajaxImport = ajaxImportPath || ((name ? `../` : '') + `${filePrefix}${getRequestFilename(staticPath)}`)
      if (/^[^\.]/g.test(ajaxImport)) {
        ajaxImport = `./${ajaxImport}`
      }

      const needImprots = getImports(parameters, responses, `${filePrefix}def`);
      let content = [];
      needImprots && content.push(needImprots);
      content = content.concat([
        `import request from '${ajaxImport}'`,
        `import urls from '${myPrefix}url'`,
        ``,
      ]);

      if (needWriteReq(parameters)) {
        content.push(handleMultiReq(parameters, /* 是否去除请求外壳，默认为true */));
      }

      const interfacePath = `${parseUrlFilePath(url)}${getFirstUpper(method)}`
      childPaths.push(interfacePath)

      const fnName = getNameFromPath(interfacePath)
      urls.push([ fnName, parseUrlRequest(url) ]);

      const reqStr = content.join('').includes('MyRequestType') ? `MyRequestType` : `any`

      content = content.concat([
        `/**`,
        `* ${summary}`,
        `*/`,
        `export default function(param: ${reqStr}) {`,
        // `export default function(param: ${requestParams || 'MyRequestType'}) {`,
        `\treturn request.${method}(urls.${fnName}, param).then(${getNewResponse(response)})`,
        `}`,
      ])
      
      fs.outputFile(`${prefix}${name}${interfacePath}.ts`, content.join('\n'));
    })
    // const method = api.post ? 'post' : 'get';
    setIndexTs(prefix, name, childPaths)
    setUrlTs(prefix, name, urls);
  })

  console.log(`${name || ''} 完成转换`)
}

const setIndexTs = (prefix, name, paths) => {
  const filename = `${prefix}${name}/index.ts`
  const contents = paths.map(v => `export { default as ${getNameFromPath(v)} } from '.${v}'`)
  fs.outputFile(filename, contents.join('\n'))
}

const setUrlTs = (prefix, name, urls) => {
  const filename = `${prefix}${name}/url.ts`
  let contents = urls.map(([ fnName, url ]) => `\t${fnName}: \`${url}\`,`);
  contents.unshift(`export default {`)
  contents.push(`}`)
  fs.outputFile(filename, contents.join('\n'))
}

const getNameFromPath = (filename) => filename.split('/').reduce((prev, next) => prev + getFirstUpper(next)).replace(/\-([a-z])/g, (str, $1) => $1.toUpperCase())

const getMatchReqRef = (ref = '') => ref.replace(/\#\/definitions\/Request«(.+)»$/g, `$1`)
const getMatchResRef = (ref = '') => ref.replace(/\#\/definitions\//g, ``)

const resetRef = (ref) => {
  let type = ref.replace(/\[\]/g, '')
  if (['boolean', 'string', 'number'].includes(type)) return '';
  return type
};

const needWriteReq = (params = []) => !(params.length === 1 && get(params, `[0].schema.$ref`) && !get(params, `[0].type`))

const replaceList = (str) => filter(str) //.replace(/^List(.+)/g, `$1[]`)

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

const getNewResponse = (_type) => {
  if (!_type || !_type.trim()) return `res => res`
  const type = _type.trim().replace(/^Response/g, '');
  if (/^List/g.test(type) || type.slice(-2) === '[]') {
    const newResponse = type.replace(/^List/g, '').replace(/\[\]/g, '')
    return `res => (res as [] || []).map(v => new ${newResponse}(v))`
  }

  const initType = ['boolean', 'string', 'number']
  if (initType.includes(type)) return `res => res as ${type}`

  return `res => new ${type}(res)`
}

module.exports = setPath
