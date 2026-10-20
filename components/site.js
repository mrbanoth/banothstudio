// One place for contact details — change here, updates everywhere.
export const EMAIL = 'sandeepnaikb0@gmail.com';
export const PHONE = '9390730129';
export const PHONE_DISPLAY = '+91 93907 30129';
export const YEAR = new Date().getFullYear();

const WA_TEXT =
  "Hi Sandeep! I found Banoth Studio and I'd like to discuss a design project.\n\n" +
  'Name:\nWhat I need (thumbnail / social post / logo / poster / ad):\nDeadline:\nBudget:';

export const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent(WA_TEXT)}`;

const QUOTE_BODY =
  'Hi Sandeep,\n\nI would like a quote for a design project.\n\n' +
  'Name:\nProject type:\nNumber of designs:\nDeadline:\nBudget:\nReference links:\n\nThanks!';

export const QUOTE_URL = `mailto:${EMAIL}?subject=${encodeURIComponent('Project Quote — Banoth Studio')}&body=${encodeURIComponent(QUOTE_BODY)}`;
