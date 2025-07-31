import {defineType} from 'sanity'

export default defineType({
  name: 'drawing',
  title: 'Drawing',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'price',
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      return {
        title,
        media,
        subtitle: subtitle ? `$${subtitle}` : undefined,
      }
    },
  },
})