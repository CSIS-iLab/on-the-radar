const brief = {
  label: 'Brief',
  name: 'brief',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'issue-briefs'
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
      name: 'refine_results',
      label: 'Refine Results'
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

export default brief
