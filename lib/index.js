const axios = require('axios').default;
const fs = require('fs-extra')
const path = require('path')
const setDef = require('./def/index.js');
const setPath = require('./path/index.js');
const { checkOrigins } = require('./util/index.js')

function gen(config = {}) {
  const { output = './src/api', url, origins, } = config;

  if (checkOrigins(origins)) {
    if (!origins && Array.isArray(origins)) {
      origins.map(origin => {
        genFn({ ...config, url: origin.url, }, origin.name)
      });
    } else if (url) {
      genFn(config);
    } else {
      console.error(`配置不合法`);
    }
  } else {
    console.error(`配置不合法`);
  }
}

/**
 * 初始化获取网络请求数据
 * 
 * @param {any}  
 */
async function genFn(config = {}, name) {
  name = name ? `/${name}` : '';
  const { output = './src/api', url, ajaxImportPath, } = config;
  const outputPath = path.join(process.cwd(), output, name);

  let objText = ''
  let data = await getJson(url);
  const { definitions, paths } = data;
  if (!definitions) {
    console.error('\n获取json失败,请重试\n')
		return ;
	}

  fs.removeSync(outputPath)
  fs.mkdirpSync(outputPath)
  
  !ajaxImportPath && copyStatic(config, outputPath);
  setDef(definitions, config, name);
  setPath(paths, config, name);
}

const copyStatic = (config, outputPath) => {
  const staticDefaultPath = path.join(__dirname, 'static', 'interceptor.ts');
  const staticPath = config.staticPath ? path.join(process.cwd(), config.staticPath) : staticDefaultPath;

  fs.copy(staticPath, path.join(outputPath, path.win32.basename(staticPath)));
}

const getJson = (url) => {
  return new Promise((resolve, reject) => {
    if (/^https?/.test(url)) {
      axios.get(url)
      .then((e)=> {
        if (e.status === 200) {
          resolve(e.data);
        } else {
          console.log(`网络请求错误`)
        }
      }).catch(err => {
        console.error(err);
      })
    } else {
      let data = require( path.join(process.cwd(), url) );
      resolve(data);
    }
  })
}

module.exports = gen;