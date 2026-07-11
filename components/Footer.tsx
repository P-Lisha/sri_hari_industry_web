import { SITE, WA_GENERIC } from '@/lib/site';
import { Icon } from './Icons';

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="fcols">
          <div>
            <div className="fbrand">
              <span className="fbrand__mark" aria-hidden="true" />
              <span className="fbrand__txt">
                <b><span className="g">Sri</span> Hari <span className="g">Industries</span></b>
                <i>Kitchen Consultancy &amp; Designs</i>
              </span>
            </div>
            <p className="fabout">
              Commercial kitchen equipment &amp; stainless steel fabrication — from cooking units to
              complete turnkey kitchens.
            </p>
            <div className="social">
              <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.4.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.2.6.4 1.3.4 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.4 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.2-1.3.4-2.3.4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.4-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.2-.6-.4-1.3-.4-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.4-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.2 1.3-.4 2.3-.4C9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.8 6.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" /></svg>
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg>
              </a>
              <a href={SITE.social.youtube} aria-label="YouTube" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M23 12s0-3.4-.4-5a2.6 2.6 0 0 0-1.8-1.8C19.1 4.8 12 4.8 12 4.8s-7.1 0-8.8.4A2.6 2.6 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.6 2.6 0 0 0 1.8 1.8c1.7.4 8.8.4 8.8.4s7.1 0 8.8-.4A2.6 2.6 0 0 0 22.6 17c.4-1.6.4-5 .4-5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" /></svg>
              </a>
              <a href={WA_GENERIC} aria-label="WhatsApp" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.2 1.3-1.7 1.3-.4 0-1 .1-3.3-.9-2.7-1.2-4.4-4-4.6-4.2-.1-.2-1-1.4-1-2.6s.6-1.8.8-2.1c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4 0 .5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.4z" /></svg>
              </a>
            </div>
            <div className="fcert">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
              {SITE.iso} Certified
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h4>Services</h4>
            <a href="#services">Kitchen Equipment</a>
            <a href="#services">Consultancy &amp; Design</a>
            <a href="#services">Turnkey Setup</a>
            <a href="#services">Installation &amp; AMC</a>
          </div>

          <div>
            <h4>Reach Us</h4>
            <ul className="fcontact">
              <li>
                <Icon name="i-phone" />
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <Icon name="i-mail" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <Icon name="i-pin" />
                <span>
                  Urumandampalayam, {SITE.address.locality} – {SITE.address.postalCode}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbar">
          © 2026 {SITE.name} · Coimbatore, Tamil Nadu
        </div>
      </div>
    </footer>
  );
}
