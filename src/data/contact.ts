// Single source of truth for contact details and the downloadable résumé.
// The site is a static Vercel deploy with no mail backend, so every
// "contact" action opens the visitor's own email app via a mailto: link.

export const CONTACT_EMAIL = 'sukhpalsingh0333@gmail.com';

// Place the real PDF at: public/Sukhpal_Singh_Resume.pdf
// Vite copies everything in public/ to the site root, so it is served at /Sukhpal_Singh_Resume.pdf
export const RESUME_FILENAME = 'Sukhpal_Singh_Resume.pdf';
export const RESUME_URL = `/${RESUME_FILENAME}`;

export const buildMailto = (subject = 'Collaboration Inquiry - Sukhpal Singh', body = ''): string => {
  const params = new URLSearchParams();
  params.set('subject', subject);
  if (body) params.set('body', body);
  // URLSearchParams encodes spaces as "+", which mail clients show literally; use %20 instead.
  return `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, '%20')}`;
};

export const DEFAULT_MAILTO = buildMailto();

export const openEmailApp = (subject?: string, body?: string): void => {
  window.location.href = buildMailto(subject, body);
};
