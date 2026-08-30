import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    // Header
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'headerCtaText',
      title: 'Header CTA Text',
      type: 'string',
    }),

    defineField({
      name: 'headerCtaUrl',
      title: 'Header CTA URL',
      type: 'string',
    }),

    // Footer
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'footerLinks',
      title: 'Footer Link Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'groupTitle',
              title: 'Group Title',
              type: 'string',
            }),

            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'url',
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'groupTitle',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),

    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
    }),
  ],
})