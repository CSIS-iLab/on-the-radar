const briefTech = {
  format: 'yaml',
  label: 'Brief Tech',
  name: 'brief_tech',
  path: '_data',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'brief-tech'
  },
  fields: [
    {
      label: 'Type',
      name: 'type',
      type: 'string',
      list: true
    },
    {
      label: 'Characteristics',
      name: 'characteristics',
      type: 'string',
      list: true
    },
    {
      label: 'Risk factors',
      name: 'risk_factors',
      type: 'string',
      list: true
    },
    {
      label: 'Domain',
      name: 'domain',
      type: 'string',
      list: true
    },
    {
      label: 'Country',
      name: 'country',
      type: 'string',
      list: true
    }
  ]
}

export default briefTech
