export default {
  name: 'calculatorConfig',
  type: 'document',
  title: 'Calculator Config',
  fields: [
    {
      name: 'notSureHeader',
      type: 'string',
      title: '"Not Sure" Header',
      description:
        'The header to be displayed when the user clicks "I\'m not sure" on a question page.',
    },
    {
      name: 'notSureContent',
      type: 'array',
      title: '"Not Sure" Content',
      of: [{name: 'content', type: 'block', title: 'content'}],
      description:
        'The content to be displayed when the user clicks "I\'m not sure" on a question page.',
    },
    {
      name: 'notSureButtonText',
      type: 'string',
      title: '"Not Sure" Button Text',
      description: 'The label for the button to close the "I\'m not sure" dialog.',
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
