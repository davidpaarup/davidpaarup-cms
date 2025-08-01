export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'Project URL',
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
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Completed', value: 'completed' },
          { title: 'On Hold', value: 'on-hold' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
}