const resources = {
  format: 'yaml',
  label: 'Resources',
  name: 'data_resources',
  path: '_data',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'resources'
  },
  fields: [
    {
      label: 'Types',
      name: 'types',
      type: 'string',
      list: true
    },
    {
      label: 'Topics',
      name: 'topics',
      type: 'string',
      list: true
    }
  ]
}

export default resources
