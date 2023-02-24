export default {
  name: 'calculatorConfig',
  type: 'document',
  title: 'Calculator Config',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      hidden: true,
      readOnly: true,
    },
    {
      name: 'unknownAnswer',
      type: 'object',
      title: 'Unknown Answer',
      description: 'The button and content for unknown answers on a question page',
      fields: [
        {
          name: 'promptText',
          type: 'string',
          title: 'Prompt Text',
          description: 'Text for the button that will open the content modal.',
        },
        {
          name: 'header',
          type: 'string',
          title: 'Header',
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [{type: 'block'}],
        },
        {
          name: 'closeText',
          type: 'string',
          title: 'Close Text',
          description: 'Text for the button that will close the content modal.',
        },
      ],
    },
    {
      name: 'feedback',
      type: 'object',
      title: 'Feedback',
      description: 'The link to the calculator feedback form from final pages.',
      fields: [
        {
          name: 'linkText',
          type: 'string',
          title: 'Link Text',
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
      ],
    },

    {
      name: 'checkAnotherConviction',
      type: 'object',
      title: 'Check Another Conviction',
      description: 'The link back to the beginning of the calculator.',
      fields: [
        {
          name: 'linkText',
          type: 'string',
          title: 'Link Text',
        },
        {
          name: 'reference',
          type: 'reference',
          title: 'Reference',
          to: [{type: 'calculatorInfoPage'}],
        },
      ],
    },
    {
      name: 'legalDisclaimer',
      type: 'text',
      title: 'Legal Disclaimer',
      initialValue: 'Hello world',
      description:
        'The primary legal disclaimer that will be displayed on each page of the calculator.',
    },
  ],
}
