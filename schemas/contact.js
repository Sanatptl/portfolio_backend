export default {
  name: 'contact',
  title: 'Contact',
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
      type: 'array',
      name: 'contacts',
      title: 'Contacts',
      of: [
        {
          type: 'document',
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
