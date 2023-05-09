const resources = {
  label: 'Resources',
  name: 'resources',
  path: '_resources',
  match: {
    include: '**/*'
  },
  ui: {
    filename: {
      readonly: false,
      slugify: values => {
        return values?.title
          ?.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
      }
    }
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      label: 'Authors',
      name: 'authors',
      type: 'string'
    },
    {
      label: 'Topics',
      name: 'topics',
      type: 'string',
      list: true
    },
    {
      label: 'Type',
      name: 'type',
      type: 'string',
      options: ['Commentary', 'Repost', 'Article'],
      required: true
    },
    {
      label: 'Link (optional)',
      name: 'link',
      type: 'string'
    },
    {
      label: 'Body of Document',
      name: 'body',
      type: 'rich-text',
      description: 'This is the markdown body',
      isBody: true
    }
  ]
}

export default resources
