import { SITE } from '@/lib/site';
import { EnquiryForm } from './EnquiryForm';

export function Contact() {
  return (
    <section className="sec soft" id="contact">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Get in Touch</span>
          <h2>Let&apos;s Work Together</h2>
          <p>
            Tell us about your kitchen requirement and we&apos;ll send you a quote — fill the form,
            or reach us directly on WhatsApp.
          </p>
        </div>

        <div className="csplit csplit--form">
          {/* LEFT — location map */}
          <div className="csplit__media csplit__media--side reveal">
            <iframe
              title="Sri Hari Industries location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={SITE.mapEmbed}
            />
            <a
              className="csplit__maplink"
              href={SITE.mapDirections}
              target="_blank"
              rel="noopener"
              aria-label="Open factory location in Google Maps"
            >
              <span className="mapbar">
                <span className="mapbar__go">Get Directions →</span>
              </span>
            </a>
          </div>

          {/* RIGHT — enquiry form */}
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
