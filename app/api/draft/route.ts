/**
 * This route is used to enable Next.js Draft Mode.
 * It's called by the Sanity Studio when you click "Preview".
 */
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

// We need a secret to prevent unauthorized users from enabling draft mode
// This MUST match the one in your Sanity Studio settings
const SANITY_PREVIEW_SECRET = process.env.SANITY_PREVIEW_SECRET || 'YOUR_SECRET_TOKEN';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') || '/'

  // Validate the secret
  if (secret !== SANITY_PREVIEW_SECRET) {
    return new Response('Invalid secret token', { status: 401 })
  }

  // **THE FIX IS HERE:**
  // We 'await' the draftMode() function to get the object
  ;(await draftMode()).enable()

  // Redirect to the path you want to preview
  redirect(slug)
}