export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Section subtitle',
      type: 'string',
    },
    {
      name: 'skillList',
      title: 'Skill List',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
            {
              name: 'image',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
