const authors = {
  label: 'Authors',
  name: 'authors',
  path: '_authors',
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
      label: 'Name',
      type: 'string',
      name: 'title'
    },
    {
      label: 'Date',
      name: 'date',
      type: 'datetime'
    },
    {
      label: 'Role',
      name: 'role',
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

export default authors
