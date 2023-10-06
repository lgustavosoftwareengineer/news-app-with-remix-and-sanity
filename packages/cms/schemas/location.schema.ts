import {defineField, defineType} from 'sanity'
import {BiSolidCity} from 'react-icons/bi'

export const locationSchema = defineType({
  name: 'location',
  type: 'document',
  title: 'Localizações',
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
      options: {
        list: ['Rio de Janeiro', 'São Paulo', 'Minas Gerais', 'Pernambuco'],
      },
    }),
    defineField({name: 'city', type: 'string'}),
  ],
})
