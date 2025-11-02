export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-02'

export const dataset = assertValue(
  // Use the server-side variable OR the public variable
  process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: SANITY_DATASET'
)

export const projectId = assertValue(
  // Use the server-side variable OR the public variable
  process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_PROJECT_ID'
)

// This new export will get our server-side token
export const readToken = process.env.SANITY_API_READ_TOKEN

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}