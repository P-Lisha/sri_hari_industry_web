'use client';

import { useState } from 'react';
import { FORMSUBMIT_ENDPOINT } from '@/lib/site';

/** Requirement dropdown — mirrors the product categories. */
const REQUIREMENTS = [
  'General Enquiry',
  'Cooking Equipment',
  'Indian Range & Automakers',
  'Food Processing Machinery',
  'Tables, Sinks & Racks',
  'Dining & Service',
  'Cold Room & Refrigeration',
  'Trolleys & Storage',
  'Complete Turnkey Kitchen',
];

type State = 'idle' | 'sending' | 'ok' | 'err';

export function EnquiryForm() {
  const [state, setState] = useState<State>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');

    const src = new FormData(form);
    const name = (src.get('name') ?? '').toString().trim();
    const phone = (src.get('phone') ?? '').toString().trim();
    const email = (src.get('email') ?? '').toString().trim();
    const product = (src.get('product') ?? 'General Enquiry').toString().trim();
    const message = (src.get('message') ?? '').toString().trim();

    // Honeypot — bots tick this, humans never see it. Silently pretend
    // success so the bot doesn't learn it was caught.
    if (src.get('botcheck')) {
      form.reset();
      setState('ok');
      setFeedback('Thank you! Your enquiry has been sent — we will get back to you shortly.');
      return;
    }

    let sent = false;

    // Primary: our own branded email (needs RESEND_API_KEY on the server).
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, product, message }),
      });
      const json = await res.json();
      sent = res.ok && json.success === true;
    } catch {
      sent = false;
    }

    // Fallback: FormSubmit (used until the branded route is configured, or if it fails).
    if (!sent) {
      const received = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      try {
        const res = await fetch(FORMSUBMIT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `New Enquiry: ${product} - ${name}`,
            ...(email ? { _replyto: email } : {}),
            _template: 'table',
            _honey: '',
            'Customer Name': name,
            'Phone / WhatsApp': phone,
            'Email Address': email || 'Not provided',
            'Requirement': product,
            'Message': message || 'No message',
            'Received (IST)': received,
            'Sent From': window.location.origin,
          }),
        });
        const json = await res.json();
        sent = String(json.success) === 'true';
      } catch {
        sent = false;
      }
    }

    if (sent) {
      setState('ok');
      setFeedback('Thank you! Your enquiry has been sent — we will get back to you shortly.');
      form.reset();
    } else {
      setState('err');
      setFeedback(
        'Sorry, we could not send your enquiry right now. Please reach us on WhatsApp instead.',
      );
    }
  }

  return (
    <form className="cform reveal" onSubmit={handleSubmit}>
      <div className="cform__head">
        <h3>Send Your Requirement</h3>
        <p>Fill in the details and our team will get back with a quote.</p>
      </div>

      {/* honeypot — bots fill this, humans never see it */}
      <input
        type="checkbox"
        name="botcheck"
        className="hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="row">
        <div>
          <label htmlFor="f-name">Name *</label>
          <input id="f-name" name="name" required placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="f-phone">Phone / WhatsApp *</label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            required
            placeholder="Mobile number"
            autoComplete="tel"
          />
        </div>
      </div>

      <label htmlFor="f-email">Email</label>
      <input
        id="f-email"
        name="email"
        type="email"
        placeholder="you@example.com (optional)"
        autoComplete="email"
      />

      <label htmlFor="f-product">Requirement</label>
      <select id="f-product" name="product" defaultValue="General Enquiry">
        {REQUIREMENTS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <label htmlFor="f-message">Message *</label>
      <textarea
        id="f-message"
        name="message"
        required
        placeholder="Tell us about your kitchen requirement — items, quantity, kitchen size, location…"
      />

      <button className="btn btn--g" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>

      {(state === 'ok' || state === 'err') && (
        <div className={`fmsg show${state === 'err' ? ' err' : ''}`} role="status">
          {feedback}
        </div>
      )}
    </form>
  );
}
