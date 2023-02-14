import choiceButton from './choice-button'
import {eligiblePage, ineligiblePage, choicePage, infoPage} from './calculator-page-types'

export default {
  name: 'calculatorPage',
  type: 'document',
  title: 'Calculator Page',
  fields: [
    {
      name: 'pageType',
      type: 'object',
      title: 'Page Type',
      fields: {
        list: [eligiblePage, ineligiblePage, choicePage, infoPage],
      },
    },
    {
      name: 'choices',
      type: 'array',
      title: 'Choices',
      of: [choiceButton],
    },
  ],
}
