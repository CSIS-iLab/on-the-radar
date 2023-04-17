const briefCountries = {
  format: 'yaml',
  label: 'Brief Countries',
  name: 'brief_countries',
  path: '_data',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'brief-countries'
  },
  fields: [
    {
      label: 'Countries',
      name: 'countries',
      type: 'string',
      list: true
    }
  ]
}

export default briefCountries
