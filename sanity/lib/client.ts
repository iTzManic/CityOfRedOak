import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // We set useCdn to false because we're using dynamic data fetching.
  // This ensures we always get the freshest data from the CMS.
  useCdn: false,
})