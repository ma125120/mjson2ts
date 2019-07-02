const axios = require('axios').default;
const fs = require('fs-extra')
const path = require('path')
const setDef = require('./def/index.js');
const setPath = require('./path/index.js');

/**
 * 初始化获取网络请求数据
 * 
 * @param {any}  
 */
function gen(config = {}) {
  const { output = './src/api', url, } = config;
  const outputPath = path.join(process.cwd(), output);

  let objText = ''
  axios.get(url)
    .then((e)=> {
      if (e.status === 200) {
          const { definitions, paths } = e.data;
          fs.removeSync(outputPath)
          fs.mkdirpSync(outputPath)
          
          copyStatic(config, outputPath);
          setDef(definitions, config)
          setPath(paths, config);
        }
    })
}

const copyStatic = (config, outputPath) => {
  const staticDefaultPath = path.join(__dirname, 'static');
  const staticPath = config.staticPath ? path.join(process.cwd(), config.staticPath) : staticDefaultPath;

  fs.copy(staticPath, path.join(outputPath, path.win32.basename(staticPath)));
}

module.exports = gen;