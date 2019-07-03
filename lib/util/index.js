const fs = require('fs-extra')
const path = require('path')

const getOutpurRoot = (output) =>  path.join(process.cwd(), output)

const filter = (str) => str.replace(`#/definitions/`, '').replace(/«/g, '').replace(/»/g, '')

const format = (type) => {
	const types = {
		'array': '',
		'integer': 'number',
	}

	return types[type] || type;
}

const formatType = (type, def) => {
	let realType = (def && def.indexOf(`#/def`) > -1) ? filter(def) : type;
	return format(realType);
}

const formatItem = (val, len = 1, name) => {
	let { type, description, $ref, } = val;
  let realType = formatType(type, $ref)
  let items = val.items

  if (items) {
    $ref = items.$ref;
    type = items.type;
    realType = formatType(type, $ref) + '[]';
  }
  if (val.enum) {
    realType = val.enum.map(v => `'${v}'`).join(' | ')
  }
  const prefix = '\t'.repeat(len);
  const nest = [
    `${prefix}/**`,
    `${prefix}* ${description}`,
    `${prefix}*/`,
    `${prefix}${name || val.name}: ${realType},`,
  ]

  return nest.join('\n');
}

module.exports = {
  getOutpurRoot,
  formatItem,
  filter,
  format,
  formatType,
}