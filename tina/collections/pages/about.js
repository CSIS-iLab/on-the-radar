const about = {
  label: 'About',
  name: 'about',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'about'
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
      name: 'social_in_header',
      label: 'Social in header'
    },
    {
      type: 'object',
      name: 'team',
      label: 'Team',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Name'
        },
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'string',
          name: 'headshot',
          label: 'Headshot'
        }
      ]
    },
    {
      type: 'object',
      name: 'consultants',
      label: 'Consultants',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Name'
        },
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'string',
          name: 'headshot',
          label: 'Headshot'
        }
      ]
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

export default about
