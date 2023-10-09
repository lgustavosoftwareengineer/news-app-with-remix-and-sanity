import {defineField, defineType} from 'sanity'
import {locationSchema} from './location.schema'
import {BiNews} from 'react-icons/bi'

export const noticeSchema = defineType({
  name: 'notice',
  type: 'document',
  title: 'Notícias',
  icon: BiNews,
  preview: {
    select: {
      title: 'title',
      media: 'previewImage',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    },
  },
  groups: [{name: 'preview', default: true}, {name: 'content'}],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required().error('The title field is required'),
      group: 'preview',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      validation: (rule) => rule.required().error('The subtitle field is required'),
      group: 'preview',
    }),
    defineField({
      name: 'previewImage',
      type: 'image',
      group: 'preview',
      fields: [
        defineField({
          type: 'string',
          name: 'alt',
          title: 'Alternative Text',
          validation: (rule) => rule.required().error('The Alternative Text is a required field'),
        }),
      ],
    }),

    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      validation: (rule) => rule.required().error('This content is important to news'),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      hidden: ({document}) => !document?.title,
      readOnly: ({document}) => !document?._id.startsWith('drafts.'),
      validation: (rule) => rule.warning('This field is based in title field'),
      group: 'content',
    }),
    defineField({
      name: 'writtenBy',
      type: 'string',
      initialValue: (param, {currentUser}) => currentUser?.name ?? '',
      readOnly: ({value}) => Boolean(value),
      validation: (rule) => rule.warning('This field is based in current logged user'),
      group: 'content',
    }),
    defineField({
      name: 'location',
      type: 'reference',
      to: [{type: locationSchema.name}],
      validation: (rule) => rule.required().error('Required field'),
      group: 'content',
    }),
  ],
})
