const analysis = {
  label: 'Analysis',
  name: 'analysis',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'analysis'
  },
  fields: [
    {
      type: 'string',
      name: 'layout',
      label: 'Layout'
    },
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'string',
      name: 'permalink',
      label: 'Permalink'
    },
    {
      type: 'boolean',
      name: 'use_algolia',
      label: 'Use Algolia'
    },
    {
      type: 'boolean',
      name: 'filter_entries',
      label: 'Filter Entries'
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true
    }
  ]
}

export default analysis
