const posts = {
  label: 'Posts',
  name: 'posts',
  path: '_posts',
  match: {
    include: '**/*'
  },
  ui: {
    filename: {
      readonly: false,
      slugify: values => {
        return `${values?.date?.substr(0, 10)}-${values?.title
          ?.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')}`
      }
    }
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string',
      isTitle: true,
      required: true
    },
    {
      label: 'Date',
      name: 'date',
      type: 'datetime',
      required: true
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
      label: 'Categories',
      name: 'categories',
      type: 'string',
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
      label: 'Keywords',
      name: 'keywords',
      type: 'string',
      list: true
    },
    {
      label: 'Related Briefs',
      name: 'related_briefs',
      type: 'string',
      list: true
    },
    {
      label: 'Featured',
      name: 'featured',
      type: 'boolean'
    },
    {
      label: 'Featured On Home',
      name: 'featured_on_home',
      type: 'boolean'
    },
    {
      label: 'Last modified Date',
      name: 'last_modified_date',
      type: 'datetime'
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

export default posts
