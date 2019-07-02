const fs = require('fs-extra')
const path = require('path')

exports.getOutpurRoot = (output) =>  path.join(process.cwd(), output)

exports.filter = (str) => str.replace(`#/definitions/`, '').replace(/«/g, '').replace(/»/g, '')