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
      name: 'notSureAnswer',
      type: 'object',
      title: 'Not Sure Answer',
      description:
        'The button and content that users click when they are not sure about their answer on a question page',
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
          styles: [{title: 'Normal', value: 'normal'}],
          title: 'Header',
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [ 
            {
              type: 'block',
              styles: [
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'H5', value: 'h5'},
                {title: 'H6', value: 'h6'},
                {title: 'Heading Calc', value: 'headingCalculator'},
                {title: 'Body 1', value: 'body1'},
                {title: 'Body 2', value: 'body2'},
                {title: 'Caption', value: 'caption'},
                {title: 'Normal', value: 'normal'},
                {title: 'Quote', value: 'blockquote'},
              ],
            } 
          ],
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
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
      description: 'Links to the calculator feedback forms from final pages.',
      fields: [
        {
          name: 'linkText',
          type: 'string',
          title: 'Link Text',
        },
        {
          name: 'feedbackUrl',
          type: 'url',
          title: 'Feedback Form URL',
        },
      ],
    },
    {
      name: 'errorReportingForm',
      type: 'object',
      title: 'Error Reporting Form',
      description: 'The link to the error reporting form.',
      fields: [
        {
          name: 'linkText',
          type: 'string',
          title: 'Link Text',
        },
        {
          name: 'errorReportingFormUrl',
          type: 'url',
          title: 'Error Reporting Form URL',
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
          to: [{type: 'calculatorInfoPage'}], // uses misdemeanor page type because mis holds the HEAD for now
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
