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
          title: 'Header',
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [{type: 'block'}],
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
          name: 'isUndeterminedUrl',
          type: 'url',
          title: 'Eligibility Undetermined URL',
        },
        {
          name: 'allOtherFeedbackUrl',
          type: 'url',
          title: 'All other feedback URL',
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
