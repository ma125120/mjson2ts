const fs = require('fs-extra')
const path = require('path')

function setDef(definitions, { output = './src/api' } = {}) {
  const filename = path.join(process.cwd(), output, 'api.ts');
	let arr = [];

	Object.keys(definitions).map(key => {
		const props = definitions[key].properties;
		arr.push(`export type ${filter(key)} = {`);
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

			arr.push(`\t // ${description}`);
			
			arr.push(`\t${name}: ${realType}\n`);
		});
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

module.exports = setDef