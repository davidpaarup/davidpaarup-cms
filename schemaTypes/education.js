export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: Rule => Rule.required()
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
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Degree Type',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'degree',
      subtitle: 'school'
    }
  }
}