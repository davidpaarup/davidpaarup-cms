export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'url',
      title: 'Company URL',
      type: 'url'
    },
    {
      name: 'startYear',
      title: 'Start Year',
      type: 'number',
      validation: Rule => Rule.required().min(1900).max(new Date().getFullYear())
    },
    {
      name: 'endYear',
      title: 'End Year',
      type: 'number',
      validation: Rule => Rule.min(1900).max(new Date().getFullYear())
    },
    {
      name: 'current',
      title: 'Current Position',
      type: 'boolean'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Employment Type',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'position',
      subtitle: 'company',
      media: 'logo'
    }
  }
}