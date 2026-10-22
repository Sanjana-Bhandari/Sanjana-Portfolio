import { siteConfig } from '../config/siteConfig';

export async function sendContactMessage(payload) {
  let res;
  try {
    res = await fetch(`${siteConfig.apiUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Cannot reach the server. Please try again in a moment.');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || 'Could not send your message.');
  }
  return data;
}
