import {defineField, defineType} from 'sanity'

export const alertBannerType = defineType({
  name: 'alertBanner',
  title: 'Alert Banner',
  type: 'document',
  
  fields: [
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
      description: 'The text that will scroll across the top of the site.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isEnabled',
      title: 'Enabled',
      type: 'boolean',
      description: 'Turn this on to show the banner on the website. Turn it off to hide it.',
      initialValue: false,
    }),
  ],
})