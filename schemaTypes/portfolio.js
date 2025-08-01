export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'english' },
          { title: 'Spanish', value: 'spanish' },
          { title: 'Danish', value: 'danish' },
          { title: 'Norwegian', value: 'norwegian' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'text',
          title: 'Text',
          type: 'string'
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'text',
          title: 'Text',
          type: 'text'
        }
      ]
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'data',
          title: 'Experience Data',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'experience' } }]
        }
      ]
    },
    {
      name: 'education',
      title: 'Education',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'data',
          title: 'Education Data',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'education' } }]
        }
      ]
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'data',
          title: 'Projects Data',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'project' } }]
        }
      ]
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'data',
          title: 'Skills List',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'capitalize',
          title: 'Capitalize',
          type: 'boolean'
        },
        {
          name: 'data',
          title: 'Languages List',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'email',
      title: 'Email',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'text',
          title: 'Email Address',
          type: 'string'
        }
      ]
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'text',
          title: 'Location',
          type: 'string'
        }
      ]
    },
    {
      name: 'birthDate',
      title: 'Birth Date',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'text',
          title: 'Birth Date',
          type: 'string'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'language',
      subtitle: 'name.text'
    }
  }
}