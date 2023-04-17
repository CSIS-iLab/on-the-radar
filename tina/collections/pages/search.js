const search = {
  label: 'Search',
  name: 'search',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'search'
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
      type: 'string',
      name: 'post_list_collection',
      label: 'Post list collection'
    },
    {
      type: 'boolean',
      name: 'use_algolia',
      label: 'Use Algolia'
    },
    {
      type: 'boolean',
      name: 'filter_entries',
      label: 'Filter entries'
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

export default search
