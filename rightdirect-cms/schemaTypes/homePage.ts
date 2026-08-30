import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',

  fields: [
    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),

    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),

    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),

    defineField({
      name: 'ctaUrl',
      title: 'CTA Button URL',
      type: 'string',
    }),

    // Stats Section
    defineField({
      name: 'statsTitle',
      title: 'Stats Section Title',
      type: 'string',
    }),

    defineField({
      name: 'statsDescription',
      title: 'Stats Section Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),

            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
    }),
    
    // Services Section
// Services Section
defineField({
  name: 'services',
  title: 'Services',
  type: 'array',
  of: [
    {
      type: 'object',

      fields: [
        defineField({
          name: 'title',
          title: 'Service Title',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Service Description',
          type: 'text',
          rows: 3,
        }),

        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
        }),

        defineField({
          name: 'ctaUrl',
          title: 'CTA URL',
          type: 'string',
        }),
      ],

      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
        },
      },
    },
  ],
}),
// Process Section
defineField({
  name: 'processTitle',
  title: 'Process Section Title',
  type: 'string',
}),

defineField({
  name: 'processDescription',
  title: 'Process Section Description',
  type: 'text',
  rows: 3,
}),

defineField({
  name: 'processSteps',
  title: 'Process Steps',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'number',
          title: 'Step Number',
          type: 'string',
        }),

        defineField({
          name: 'title',
          title: 'Step Title',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Step Description',
          type: 'text',
          rows: 4,
        }),
      ],

      preview: {
        select: {
          title: 'title',
          subtitle: 'number',
        },
      },
    },
  ],
}),
// Success Stories Section
defineField({
  name: 'successStoriesTitle',
  title: 'Success Stories Section Title',
  type: 'string',
}),

defineField({
  name: 'successStoriesDescription',
  title: 'Success Stories Section Description',
  type: 'text',
  rows: 3,
}),

defineField({
  name: 'successStories',
  title: 'Success Stories',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'category',
          title: 'Category / Location',
          type: 'string',
        }),

        defineField({
          name: 'companyName',
          title: 'Company Name',
          type: 'string',
        }),

        defineField({
          name: 'image',
          title: 'Story Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            }),
          ],
        }),

        defineField({
          name: 'title',
          title: 'Story Title',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Story Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
        }),

        defineField({
          name: 'ctaUrl',
          title: 'CTA URL',
          type: 'string',
        }),
      ],

      preview: {
        select: {
          title: 'companyName',
          subtitle: 'title',
          media: 'image',
        },
      },
    },
  ],
}),

defineField({
  name: 'successStoriesMoreTitle',
  title: 'More Success Stories Title',
  type: 'string',
}),

defineField({
  name: 'successStoriesMoreDescription',
  title: 'More Success Stories Description',
  type: 'text',
  rows: 2,
}),

defineField({
  name: 'successStoriesMoreCtaText',
  title: 'More Success Stories CTA Text',
  type: 'string',
}),

defineField({
  name: 'successStoriesMoreCtaUrl',
  title: 'More Success Stories CTA URL',
  type: 'string',
}),
// Trusted Brands Section
defineField({
  name: 'brandsTitle',
  title: 'Trusted Brands Section Title',
  type: 'string',
}),

defineField({
  name: 'brandLogos',
  title: 'Brand Logos',
  type: 'array',
  of: [
    {
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    },
  ],
}),
// Testimonials Section
defineField({
  name: 'testimonialsTitle',
  title: 'Testimonials Section Title',
  type: 'string',
}),

defineField({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'company',
          title: 'Company / Location',
          type: 'string',
        }),

        defineField({
          name: 'personImage',
          title: 'Person Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            }),
          ],
        }),

        defineField({
          name: 'quote',
          title: 'Testimonial',
          type: 'text',
          rows: 5,
        }),

        defineField({
          name: 'personName',
          title: 'Person Name',
          type: 'string',
        }),

        defineField({
          name: 'designation',
          title: 'Designation',
          type: 'string',
        }),
      ],

      preview: {
        select: {
          title: 'personName',
          subtitle: 'company',
          media: 'personImage',
        },
      },
    },
  ],
}),
// Collaboration Section
defineField({
  name: 'collaborationTitle',
  title: 'Collaboration Section Title',
  type: 'string',
}),

defineField({
  name: 'collaborationDescription',
  title: 'Collaboration Section Description',
  type: 'text',
  rows: 3,
}),

defineField({
  name: 'collaborationItems',
  title: 'Collaboration Items',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Item Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            }),
          ],
        }),

        defineField({
          name: 'title',
          title: 'Item Title',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Item Description',
          type: 'text',
          rows: 3,
        }),
      ],

      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
          media: 'image',
        },
      },
    },
  ],
}),
// FAQ Section
defineField({
  name: 'faqTitle',
  title: 'FAQ Section Title',
  type: 'string',
}),

defineField({
  name: 'faqs',
  title: 'FAQs',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'category',
          title: 'Category',
          type: 'string',
        }),

        defineField({
          name: 'question',
          title: 'Question',
          type: 'string',
        }),

        defineField({
          name: 'answer',
          title: 'Answer',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
        }),

        defineField({
          name: 'ctaUrl',
          title: 'CTA URL',
          type: 'string',
        }),
      ],

      preview: {
        select: {
          title: 'question',
          subtitle: 'category',
        },
      },
    },
  ],
}),
// Bottom CTA Section
defineField({
  name: 'bottomCtaTitle',
  title: 'Bottom CTA Title',
  type: 'string',
}),

defineField({
  name: 'bottomCtaDescription',
  title: 'Bottom CTA Description',
  type: 'text',
  rows: 3,
}),

defineField({
  name: 'bottomCtaImage',
  title: 'Bottom CTA Background Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
    }),
  ],
}),

defineField({
  name: 'bottomCtaText',
  title: 'Bottom CTA Button Text',
  type: 'string',
}),

defineField({
  name: 'bottomCtaUrl',
  title: 'Bottom CTA Button URL',
  type: 'string',
}),
  ],
})