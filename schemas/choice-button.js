export default {
  name: 'choiceButton',
  title: 'Choice Button',
  type: 'object',
  fields: [
    {
      name: 'color',
      title: 'color',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Neutral', value: 'neutral'},
        ],
      },
    },
  ],
}
