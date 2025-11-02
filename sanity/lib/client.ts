import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// This helper function checks if we're on the server and have a token
const getSanityToken = (): string | undefined => {
  return process.env.SANITY_API_READ_TOKEN;
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  
  // set useCdn to 'false' if your application requires the freshest data always
  // (we already set this to false for live preview, but this is a good reminder)
  useCdn: false,
  
  // This is the new part:
  // Use the token if it's available (only on the server)
  token: getSanityToken(),

  // These settings are important for live preview
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})