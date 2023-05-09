const briefIssue = {
  format: 'yaml',
  label: 'Brief Issue',
  name: 'briefIssue',
  path: '_data',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'issue_briefs'
  },
  fields: [
    {
      label: 'Tech',
      name: 'tech',
      type: 'object',
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
    },
    {
      label: 'Countries',
      name: 'countries',
      type: 'string',
      list: true
    },
    {
      label: 'Tech type',
      name: 'tech_type',
      type: 'string',
      list: true
    },
    {
      label: 'Tech characteristics',
      name: 'tech_characteristics',
      type: 'string',
      list: true
    }
  ]
}

export default briefIssue
