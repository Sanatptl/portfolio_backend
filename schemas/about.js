export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      title: 'FName',
      name: 'fName',
      type: 'string',
    },
    {
      title: 'LName',
      name: 'lName',
      type: 'string',
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
    },
    {
      title: 'Slogan',
      name: 'slogan',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              title: 'Tag line',
              name: 'line',
              type: 'string',
            },

            {
              title: 'Sp char',
              name: 'spChar',
              type: 'string',
            },
          ],
        },
      ],
    },

    {
      title: 'Resume',
      name: 'resume',
      type: 'file',
    },
  ],
}
