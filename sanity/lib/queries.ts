import { client } from './client';

// This is a GROQ query to get the *one* alert banner that is *enabled*
const alertQuery = `*[_type == "alertBanner" && isEnabled == true][0] {
  message
}`;

// This is the function our server will call to get the data
export async function getAlertBanner(): Promise<string | null> {
  try {
    const data = await client.fetch(alertQuery);
    return data ? data.message : null;
  } catch (error) {
    console.error("Failed to fetch alert banner:", error);
    return null;
  }
}