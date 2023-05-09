const language = {
  format: 'yaml',
  label: 'Language',
  name: 'language',
  path: '_data',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'language'
  },
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'string'
    },
    {
      name: 'phone_number',
      label: 'Phone Number',
      type: 'string'
    },
    {
      name: 'author_list',
      label: 'Author List',
      type: 'string'
    },
    {
      name: 'jump_to',
      label: 'Jump To',
      type: 'string'
    },
    {
      name: 'dash',
      label: 'Dash',
      type: 'string'
    },
    {
      name: 'page_footer',
      label: 'Page Footer',
      type: 'object',
      fields: [
        {
          name: 'posts',
          label: 'Posts',
          type: 'string'
        },
        {
          name: 'workshops',
          label: 'Workshops',
          type: 'string'
        },
        {
          name: 'briefs',
          label: 'Briefs',
          type: 'string'
        }
      ]
    },
    {
      name: 'footer',
      label: 'Footer',
      type: 'object',
      fields: [
        {
          name: 'about_heading',
          label: 'About Heading',
          type: 'string'
        },
        {
          name: 'about_description',
          label: 'About Description',
          type: 'string'
        },
        {
          name: 'address',
          label: 'Address',
          type: 'string'
        },
        {
          name: 'visit_other_projects',
          label: 'Visit Other Projects',
          type: 'string'
        },
        {
          name: 'copyright',
          label: 'Copyright',
          type: 'string'
        }
      ]
    },
    {
      name: 'about_authors',
      label: 'About Authors',
      type: 'string'
    },
    {
      name: 'search_placeholder',
      label: 'Search Placeholder',
      type: 'string'
    },
    {
      name: 'tagline',
      label: 'Tagline',
      type: 'string'
    },
    {
      name: 'published',
      label: 'Published',
      type: 'string'
    },
    {
      name: 'last_updated',
      label: 'Last Updated',
      type: 'string'
    },
    {
      name: 'event_date',
      label: 'Event Date',
      type: 'string'
    },
    {
      name: 'featured',
      label: 'Featured',
      type: 'string'
    },
    {
      name: 'topic',
      label: 'Topics',
      type: 'string'
    },
    {
      name: 'Archive',
      label: 'Archive',
      type: 'object',
      fields: [
        {
          name: 'search_placeholder',
          label: 'Search Placeholder',
          type: 'string'
        },
        {
          name: 'oldest',
          label: 'Oldest',
          type: 'string'
        },
        {
          name: 'newest',
          label: 'Newest',
          type: 'string'
        },
        {
          name: 'resource_name',
          label: 'Resource Name',
          type: 'string'
        },
        {
          name: 'filter_by_type',
          label: 'Filter by Type',
          type: 'string'
        },
        {
          name: 'filter_entries',
          label: 'Filter Entries',
          type: 'string'
        },
        {
          name: 'refine_results',
          label: 'Refine Results',
          type: 'string'
        },
        {
          name: 'featured_post',
          label: 'Featured Post',
          type: 'string'
        },
        {
          name: 'tech_primer',
          label: 'Tech Primer',
          type: 'string'
        },
        {
          name: 'tech_primer_description',
          label: 'Tech Primer Description',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        },
        {
          name: 'country_profile',
          label: 'Country Profile',
          type: 'string'
        },
        {
          name: 'country_profile_description',
          label: 'Country Profile Description',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        }
      ]
    },
    {
      name: 'related_reading',
      label: 'Related Reading',
      type: 'string'
    },
    {
      name: 'more_on',
      label: 'More On',
      type: 'string'
    },
    {
      name: 'details',
      label: 'Details',
      type: 'object',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'string'
        },
        {
          name: 'categories',
          label: 'Categories',
          type: 'string'
        },
        {
          name: 'downloads',
          label: 'Downloads',
          type: 'string'
        },
        {
          name: 'download',
          label: 'Download Full',
          type: 'string'
        },
        {
          name: 'related_briefs',
          label: 'Related Briefs',
          type: 'string'
        }
      ]
    },
    {
      name: 'about',
      label: 'About',
      type: 'object',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'string'
        },
        {
          name: 'team',
          label: 'Principal Researchers',
          type: 'string'
        },
        {
          name: 'consultants',
          label: 'Consultants',
          type: 'string'
        },
        {
          name: 'dev_team_heading',
          label: 'Development Team Heading',
          type: 'string'
        },
        {
          name: 'csis_heading',
          label: 'About CSIS Heading',
          type: 'string'
        },
        {
          name: 'dev_team',
          label: 'Development Team',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        },
        {
          name: 'csis',
          label: 'About CSIS',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        }
      ]
    },
    {
      label: 'Heading Aside',
      name: 'heading_aside',
      type: 'object',
      fields: [
        {
          label: 'Website',
          name: 'website',
          type: 'string'
        },
        {
          label: 'Email',
          name: 'email',
          type: 'string'
        },
        {
          label: 'Phone',
          name: 'phone',
          type: 'string'
        },
        {
          label: 'NGNN URL',
          name: 'ngnn_url',
          type: 'string'
        }
      ]
    },
    {
      label: 'Home',
      name: 'home',
      type: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'string'
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          type: 'string'
        },
        {
          label: 'Space',
          name: 'space',
          type: 'object',
          fields: [
            {
              label: 'Quote',
              name: 'quote',
              type: 'string',
              ui: {
                component: 'textarea'
              }
            },
            {
              label: 'Citation',
              name: 'citation',
              type: 'string'
            }
          ]
        },
        {
          label: 'Matter',
          name: 'matter',
          type: 'object',
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string'
            },
            {
              label: 'Description',
              name: 'desc',
              type: 'string',
              ui: {
                component: 'textarea'
              }
            },
            {
              label: 'Sections',
              name: 'sections',
              type: 'object',
              list: true,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  type: 'string'
                },
                {
                  label: 'Description',
                  name: 'desc',
                  type: 'string',
                  ui: {
                    component: 'textarea'
                  }
                },
                {
                  label: 'Footnote',
                  name: 'footnote',
                  type: 'string'
                }
              ]
            }
          ]
        },
        {
          label: 'Project Navigation',
          name: 'proj_nav',
          type: 'object',
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string'
            },
            {
              label: 'Description',
              name: 'desc',
              type: 'string',
              ui: {
                component: 'textarea'
              }
            },
            {
              label: 'More',
              name: 'more',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}

export default language
