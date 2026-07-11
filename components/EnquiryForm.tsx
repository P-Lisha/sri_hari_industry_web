'use client';

import { useState } from 'react';
import { WEB3FORMS_KEY } from '@/lib/site';

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

    // Rebuild the payload with neatly-labelled fields so the email that lands
    // in the inbox reads cleanly (Web3Forms shows each key as-is).
    const data = new FormData();
    data.append('access_key', WEB3FORMS_KEY);
    data.append('from_name', 'Sri Hari Industries Website');
    data.append('subject', `New enquiry — ${product} (from ${name})`);

    // Reply-To so you can reply straight to the customer from your inbox.
    if (email) data.append('replyto', email);
    // Honeypot passthrough — only present when a bot ticked it.
    const botcheck = src.get('botcheck');
    if (botcheck) data.append('botcheck', botcheck.toString());

    // Order here = order in the email body.
    data.append('Name', name);
    data.append('Phone / WhatsApp', phone);
    data.append('Email', email || '—');
    data.append('Requirement', product);
    data.append('Message', message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setState('ok');
        setFeedback('Thank you! Your enquiry has been sent — we will get back to you shortly.');
        form.reset();
      } else {
        setState('err');
        setFeedback(
          json.message ||
            'Sorry, we could not send your enquiry right now. Please reach us on WhatsApp instead.',
        );
      }
    } catch {
      setState('err');
      setFeedback('Network error — please check your connection or reach us on WhatsApp instead.');
    }
  }

  return (
    <form className="cform reveal" onSubmit={handleSubmit} noValidate>
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
