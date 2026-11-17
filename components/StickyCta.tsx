/* ===========================================================
   Mobile sticky CTA bar — fixed to the bottom of the viewport
   on product pages so Call / WhatsApp stay reachable after the
   hero actions scroll away. Hidden on desktop (CSS .stickycta).
   =========================================================== */

import { SITE, waLink } from '@/lib/site';

export function StickyCta({ waMessage }: { waMessage: string }) {
  return (
    <div className="stickycta">
      <a className="stickycta__call" href={`tel:${SITE.phoneHref}`}>
        Call Now
      </a>
      <a className="stickycta__wa" href={waLink(waMessage)} target="_blank" rel="noopener">
        Get Quote on WhatsApp
      </a>
    </div>
  );
}
