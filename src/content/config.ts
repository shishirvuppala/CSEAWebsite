import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const bitstreamformat = defineCollection({
    type: 'content',
    schema: z.object({
        year: z.number(),
        date: z.coerce.date(),
        image: z.string()
    })
})

const blogformat = defineCollection({ // as it is type content no need to put in a loader
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string(),
        blogimage: z.string(),
        personimage: z.optional(z.string()),
  }),
});

export const collections = {
  blog : blogformat,
  bitstream: bitstreamformat
};