import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  
  // This is fine. It means we get fresh data, but it's still public.
  useCdn: false,

  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})