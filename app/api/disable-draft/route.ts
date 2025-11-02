/**
 * This route is used to disable Next.js Draft Mode.
 */
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug') || '/'
  
  // **THE FIX IS HERE:**
  // We 'await' the draftMode() function to get the object
  ;(await draftMode()).disable()

  // Redirect back to the page
  redirect(slug)
}