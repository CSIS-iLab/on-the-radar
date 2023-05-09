const workshops = {
  label: 'Workshops',
  name: 'workshops',
  path: '_workshops',
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
      label: 'Date',
      name: 'date',
      type: 'datetime'
    },
    {
      label: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      label: 'Image Caption',
      name: 'image_caption',
      type: 'string'
    },
    {
      label: 'Image Source',
      name: 'image_source',
      type: 'string'
    },
    {
      label: 'Authors',
      name: 'authors',
      type: 'string',
      list: true
    },
    {
      label: 'Details',
      name: 'details',
      type: 'object',
      fields: [
        {
          type: 'datetime',
          name: 'event_date',
          label: 'Event Date'
        },
        {
          type: 'string',
          name: 'location',
          label: 'Location'
        }
      ]
    },
    {
      label: 'Downloads',
      name: 'downloads',
      type: 'object',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'media_upload',
          label: 'Media Upload'
        },
        {
          type: 'string',
          name: 'label',
          label: 'Label'
        }
      ]
    },
    {
      label: 'Featured on Home Page?',
      name: 'featured_on_home',
      type: 'boolean'
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

export default workshops
