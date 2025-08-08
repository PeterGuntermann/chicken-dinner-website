import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    events: defineCollection({
      type: 'data',
      source: 'events.yml',
      schema: z.object({
        datum: z.string(),
        titel: z.string(),
        link: z.string(),
        details: z.string(),
      }),
    }),
    repertoire: defineCollection({
      type: 'data',
      source: 'repertoire.csv',
      schema: z.object({
        title: z.string(),
        artist: z.string(),
      }),
    }),
  },
});
