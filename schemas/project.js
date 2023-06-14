export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Sub Title',
      name: 'subTitle',
      type: 'string',
    },
    {
      name: 'projectList',
      title: 'Project List',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'string',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              title: 'Description',
              name: 'description',
              type: 'array',
              of: [
                {
                  type: 'document',
                  fields: [
                    {
                      type: 'string',
                      name: 'points',
                      title: 'Key Point',
                    },
                    {
                      title: 'Sub Points',
                      name: 'subPoints',
                      type: 'array',
                      of: [{type: 'string'}],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
