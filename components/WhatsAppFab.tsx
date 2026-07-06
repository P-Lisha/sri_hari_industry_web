import { WA_GENERIC } from '@/lib/site';

export function WhatsAppFab() {
  return (
    <a
      className="wafab"
      href={WA_GENERIC}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.2 1.3-1.7 1.3-.4 0-1 .1-3.3-.9-2.7-1.2-4.4-4-4.6-4.2-.1-.2-1-1.4-1-2.6s.6-1.8.8-2.1c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4 0 .5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.4z" />
      </svg>
    </a>
  );
}
