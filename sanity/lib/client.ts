import { createClient } from 'next-sanity'

// 1. IMPORT THE NEW readToken
import { apiVersion, dataset, projectId, readToken } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  
  useCdn: false, // Must be false for live preview and server fetching
  
  // 2. USE THE TOKEN FOR ALL SERVER-SIDE REQUESTS
  // This will authenticate the Vercel server
  token: readToken,

  // These settings are required for Live Preview
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})