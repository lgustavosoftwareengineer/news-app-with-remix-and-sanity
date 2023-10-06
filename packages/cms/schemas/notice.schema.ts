import {defineField, defineType} from 'sanity'
import {locationSchema} from './location.schema'
import {BiNews} from 'react-icons/bi'

export const noticeSchema = defineType({
  name: 'notice',
  type: 'document',
  title: 'Notícias',
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
        media: BiNews,
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      hidden: ({document}) => !document?.title,
      readOnly: ({document}) => !document?._id.startsWith('drafts.'),
    }),
    defineField({
      name: 'writtenBy',
      type: 'string',
      initialValue: (param, {currentUser}) => currentUser?.name ?? '',
      readOnly: ({value}) => Boolean(value),
    }),
    defineField({
      name: 'location',
      type: 'reference',
      to: [{type: locationSchema.name}],
    }),
  ],
})
