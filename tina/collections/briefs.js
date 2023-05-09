const briefs = {
  label: 'Briefs',
  name: 'briefs',
  path: '_briefs',
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
      label: 'Brief Type',
      name: 'brief_type',
      type: 'string',
      options: ['Tech Primer', 'Country Profile']
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
      label: 'Keywords',
      type: 'string',
      name: 'keywords',
      list: true
    },
    {
      label: 'Excerpt',
      name: 'excerpt',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Featured on Home Page?',
      name: 'featured_on_home',
      type: 'boolean'
    },
    {
      label: 'Last modified Date',
      name: 'last_modified_date',
      type: 'datetime'
    },
    {
      label: 'Details',
      name: 'details',
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
          label: 'Risk Factors',
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
      label: 'Downloads',
      name: 'downloads',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Media Upload',
          name: 'media_upload',
          type: 'string'
        },
        {
          label: 'Label',
          name: 'label',
          type: 'string'
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

export default briefs
