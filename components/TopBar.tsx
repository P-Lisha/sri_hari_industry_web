import { SITE } from '@/lib/site';
import { Icon } from './Icons';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="topbar__l">
          <a href={`tel:${SITE.phoneHref}`}>
            <Icon name="i-phone" /> {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`}>
            <Icon name="i-mail" /> {SITE.email}
          </a>
        </div>
        <div className="topbar__r">
          <span className="iso">{SITE.iso}</span>
          <span>{SITE.address.locality}</span>
        </div>
      </div>
    </div>
  );
}
