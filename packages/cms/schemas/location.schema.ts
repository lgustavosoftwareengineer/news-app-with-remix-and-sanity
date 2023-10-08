import {defineField, defineType} from 'sanity'
import {BiSolidCity} from 'react-icons/bi'

export const locationSchema = defineType({
  name: 'location',
  type: 'document',
  title: 'Localizações',
  icon: BiSolidCity,
  preview: {
    select: {
      name: 'state',
    },
    prepare({name}) {
      return {
        title: name,
        media: BiSolidCity,
      }
    },
  },
  fields: [
    defineField({
      name: 'state',
      type: 'string',
      placeholder: 'Select the state',
      options: {
        list: ['Rio de Janeiro', 'São Paulo', 'Minas Gerais', 'Pernambuco'],
      },
      validation: (rule) => rule.required().error('The state field is required'),
    }),
    defineField({
      name: 'city',
      type: 'string',
      placeholder: 'Select the city',
      validation: (rule) => rule.required().error('The city field is required'),
    }),
  ],
})
