const fs = require('fs-extra')
const path = require('path')

function setDef(definitions, { output = './src/api' } = {}, name = '') {
  const filename = path.join(process.cwd(), output, name, 'def.ts');
	let arr = [
		`function assign(defaultObj, nowObj) {
	const obj = { ...defaultObj, ...nowObj }
	Object.keys(obj).map(v => {
		if (obj[v] === null && !Array.isArray(defaultObj[v])) {
		obj[v] = defaultObj[v]
		}
	})
	
	return obj
}`
	];

	Object.keys(definitions).map(key => {
		const props = definitions[key].properties;
		if (!props) return;

		const className = filter(key)
		arr.push(`export class ${className} {`);

		const fields = [];
		Object.keys(props).map(name => {
			const val = props[name]
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
			fields.push({ name, realType })
			const nest = [
				`\t/**`,
				`\t* ${description}`,
				`\t*/`,
				`\t${name}: ${realType} = ${getDefaultVal(realType)}\n`,
			]
			
			arr = arr.concat(nest);
		});

		const arrStr = fields.filter(v => /^[A-Z]/g.test(v.realType)).map(getNewType).join('\n\t')
		arr.push(`	constructor(data: any = {}) {
		const obj = assign(this, data) as ${className}
	${arrStr}
		return obj
	}`);
		arr.push(`}\n`);
	});

	fs.outputFile(filename, arr.join(`\n`));
}

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

const getDefaultVal = (realType) => {
	if (!realType) return null;

	const type = realType.trim()
	if (type.slice(-2) === '[]') return '[]';

	const values = {
		number: '0',
		boolean: 'false',
		string: '``',
	}

	return values[type] || null
}

const getNewType = ({ name, realType }) => {
	if (realType.slice(-2) === '[]') {
		return `\tobj.${name} = obj.${name}.map(v => new ${realType.replace('[]', '')}(v))`
	} else {
		return `\tif (obj.${name}) {
			obj.${name} = new ${realType}(obj.${name})
		}`
	}
}

module.exports = setDef