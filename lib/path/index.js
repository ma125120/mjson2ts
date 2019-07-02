const fs = require('fs-extra')
const path = require('path')
const { filter, getOutpurRoot, } = require('../util/index.js');

function setPath(paths, { output = './src/api', staticPath } = {}) {
  const prefix = getOutpurRoot(output);
  
  const apis = Object.keys(paths);
  
  apis.map(url => {
    const api = paths[url];
    const { summary, parameters, responses, } = api.post || {};
    if (!summary) return ;
    
    let requestParams = parameters ? getMatchReqRef(parameters[0].schema.$ref) : '{}';
    requestParams = replaceList(requestParams)
    let response = responses['200'].schema ? getMatchResRef(responses['200'].schema.$ref) : '';
    response = replaceList(response)

    const filePrefix = `../`.repeat(url.split('/').length - 2)
    const content = [
      `import { ${resetRef(requestParams)}, ${response} } from '${filePrefix}api'`,
      `import request from '${filePrefix}${getRequestFilename(staticPath)}'`,
      ``,
      `// ${summary}`,
      `export default function(param: ${requestParams}) {`,
      `\treturn request<${requestParams}, ${response}>('${url}', 'post', param)`,
      `}`,
    ].join('\n');

    fs.outputFile(`${prefix}${url}.ts`, content);
  })

  console.log(`完成转换`)
}

const getMatchReqRef = (ref) => ref.replace(/\#\/definitions\/Request«(.+)»$/g, `$1`)
const getMatchResRef = (ref) => ref.replace(/\#\/definitions\//g, ``)

const resetRef = (ref) => {
  let type = ref.replace(/\[\]/g, '')
  if (['boolean', 'string', 'number'].includes(type)) return '';
  return type
};

const replaceList = (str) => filter(str).replace(/^List(.+)/g, `$1[]`)

const getRequestFilename = (staticPath) => staticPath ? path.win32.basename(staticPath).replace(/\.[tj]s/g, '') : 'interceptor'

module.exports = setPath
