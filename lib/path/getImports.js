const get = require('lodash.get')
const { filter, formatType, isPrimiter, } = require('../util/index.js')

// 获取各种ts type 的 import 引用
const getImports = (params, responses, pathname) => {
  if (/^[^\.]/.test(pathname)) {
    pathname = `./${pathname}`
  }

  let imports = '';

  const resImports = getResImports(responses);
  resImports !== '' && (imports = resImports);

  const reqImprots = getReqImports(params);
  reqImprots !== '' && (imports += `${resImports ? ', ' : ''}` + reqImprots );

  if (imports) {
    return `import { ${imports} } from '${pathname}'`
  }
}

const getReqImports = (params = []) => {
  return '';
  return params
    .map(v => formatType('', get(v, `schema.$ref`)).replace(/^Request/g, ''))
    .map(v => v.replace(/^List/g, ``))
    .filter(v => v)
    .filter(v => !isPrimiter(v))
    .join(', ');
}

const getResImports = (responses) => {
  const ref = get(responses, `['200'].schema.$ref`, '') || get(responses, `['200'].schema.items.$ref`, '');
  const type = get(responses, `['200'].schema.type`, '');
  return formatType(type, ref)
  .replace(/^Response/g, '')
  .replace(/^List/g, '')
  .replace('boolean', '')
  .replace('string', '')
}

module.exports = getImports