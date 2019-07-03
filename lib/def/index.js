const fs = require('fs-extra')
const path = require('path')

function setDef(definitions, { output = './src/api' } = {}, name = '') {
  const filename = path.join(process.cwd(), output, name, 'api.ts');
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
			const nest = [
				`\t/**`,
				`\t* ${description}`,
				`\t*/`,
				`\t${name}: ${realType}\n`,
			]
			
			arr = arr.concat(nest);
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