import { MdCalculate } from 'react-icons/md'

enum pageTypes {
  FELONY='calculatorFelonyPage',
  MISDEMEANOR='calculatorInfoPage',
}

interface ParentVisibilityState {
  parent: {
    isQuestion: boolean;
    isFinalPage: boolean;
    isEligible: boolean;
    isUndetermined: boolean;
    isExternalLink: boolean;
  }
}

const getBaseCalculatorPageFields = (pageType: pageTypes) => {
  return [
    {
      type: 'string', 
      name: 'title', 
      title: 'Title'
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      description: 'A unique identifier that can be used in a URL.',
    },
    {
      type: 'boolean',
      name: 'isQuestion',
      title: 'Is Question',
      initialValue: false,
      description: 'Is this page asking the user a question?',
    },
    {
      type: 'boolean',
      name: 'isFinalPage',
      title: 'Is Final Page',
      initialValue: false,
      description:
        'Is this page considered "final"? A final page will contain a link back to the beginning of the calculator.',
    },
    {
      type: 'boolean',
      name: 'isEligible',
      title: 'Is Eligible',
      hidden: ({ parent }: ParentVisibilityState) => !parent.isFinalPage,
      initialValue: false,
      description: "Is the user's conviction eligible for vacation?",
    },
    {
      type: 'boolean',
      name: 'isUndetermined',
      title: 'Is Undetermined',
      hidden: ({ parent }: ParentVisibilityState) => !parent.isFinalPage,
      initialValue: false,
      description: "Is the user's conviction eligibility unable to be determined at this time?",
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [
        {
          type: 'block',
        }
      ],
      description: 'The main content that will be displayed to the user.',
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      description: 'An image to display on the page.',
    },
    {
      type: 'array',
      name: 'choices',
      title: 'Choices',
      of: [
        {
          type: 'object',
          name: 'choice',
          title: 'Choice',
          fields: [
            {
              type: 'string', 
              name: 'label', 
              title: 'Label'
            },
            {
              type: 'boolean', 
              name: 'isExternalLink', 
              title: 'External Link', 
              initialValue: false
            },
            {
              type: 'url', 
              name: 'url', 
              title: 'URL', 
              hidden: ({ parent }: ParentVisibilityState) => !parent.isExternalLink},
            {
              type: 'reference',
              name: 'linkTo',
              title: `Link to ` + (pageType === pageTypes.FELONY ? `felony page` : `misdemeanor page`),
              to: [{type: pageType}],
              hidden: ({ parent }: ParentVisibilityState) => parent.isExternalLink,
            },
            {
              type: 'reference',
              name: 'linkToOtherPageType',
              title: `Link to ` + (pageType === pageTypes.FELONY ? `misdemeanor page` : `felony page`),
              to: [{type: pageType === pageTypes.FELONY ? pageTypes.MISDEMEANOR : pageTypes.FELONY}],
              hidden: ({ parent }: ParentVisibilityState) => parent.isExternalLink,
            },
          ],
        },
      ],
      description:
        'A list of choices for the user. These are typically references to other calculator pages, but can also be external links.',
    },
  ]
}

export const calculatorMisdemeanorPage = {
  type: 'document',
  name: 'calculatorInfoPage', // keeps "info" instead of "misdeameanor" so that current pages remain intact
  title: 'Calculator Misdemeanor Page',
  icon: MdCalculate,
  fields: getBaseCalculatorPageFields(pageTypes.MISDEMEANOR),
}

export const calculatorFelonyPage = {
  type: 'document',
  name: 'calculatorFelonyPage',
  title: 'Calculator Felony Page',
  icon: MdCalculate,
  fields: getBaseCalculatorPageFields(pageTypes.FELONY),
}

