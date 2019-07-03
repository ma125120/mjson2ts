const fs = require('fs-extra');
const { formatItem } = require('../util/index')


const handleMultiReq = (list = [], combine = true) => {
  return combine ? handleObj(list) : handleList(list);
}

const handleList = (params) => {
  let content = [
    `type MyRequestType = {`,
  ];

  let data = {}
  const types = ['query', 'path', 'body', 'formData']
  types.forEach(type => data[type] = []);
  
  params.map(v => {
    data[v.in].push(formatItem(v, 2));
  })

  types.map(v => {
    if (data[v].length > 0) {
      data[v] = ([
        `\t${v}: {`,
        data[v].join('\n\t\t'),
        `\t},`,
      ].join('\n'));
    }
  });
  content = content.concat(data.query).concat(data.path).concat(data.body).concat(data.formData)
  content.push(`}`);

  return content.join('\n');
}

const handleObj = (params) => {
  const content = [
    `type MyRequestType = {`,
  ];
  params.map(item => {
    content.push(formatItem(item, 1));
  });

  content.push(`}`);

  return content.join('\n');
}

const list = [
  {
    "name": "petId",
    "in": "path",
    "description": "ID of pet that needs to be updated",
    "required": true,
    "type": "integer",
    "format": "int64"
  },
  {
    "name": "name",
    "in": "formData",
    "description": "Updated name of the pet",
    "required": false,
    "type": "string"
  },
  {
    "name": "status",
    "in": "formData",
    "description": "Updated status of the pet",
    "required": false,
    "type": "string"
  }
]

module.exports = {
  handleMultiReq,
}
