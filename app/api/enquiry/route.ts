import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

const MAX = { name: 100, phone: 30, email: 200, product: 100, message: 3000 };
const BLUE = '#2a53a5';
const BLUE_DARK = '#152c5c';

function clean(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function buildHtml(f: {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
  received: string;
}): string {
  const digits = f.phone.replace(/\D/g, '');
  const waNumber = digits.length === 10 ? `91${digits}` : digits;
  const row = (label: string, valueHtml: string) =>
    `<tr>
      <td style="padding:12px 16px;width:150px;background:#f3f6fc;border-bottom:1px solid #e3e9f5;color:#5b6b8a;font-size:13px;font-weight:600;vertical-align:top">${esc(label)}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e3e9f5;color:#0c1a30;font-size:15px;vertical-align:top">${valueHtml}</td>
    </tr>`;

  const emailCell = f.email
    ? `<a href="mailto:${esc(f.email)}" style="color:${BLUE};text-decoration:none">${esc(f.email)}</a>`
    : '<span style="color:#8a96ad">Not provided</span>';
  const phoneCell = `<a href="tel:+${esc(waNumber)}" style="color:${BLUE};text-decoration:none;font-weight:600">${esc(f.phone)}</a>`;
  const messageCell = f.message
    ? `<span style="white-space:pre-wrap">${esc(f.message)}</span>`
    : '<span style="color:#8a96ad">No message</span>';

  const buttons =
    (waNumber
      ? `<a href="https://wa.me/${esc(waNumber)}" style="display:inline-block;background:#25d366;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:11px 20px;border-radius:8px;margin:0 8px 8px 0">Reply on WhatsApp</a>`
      : '') +
    `<a href="tel:+${esc(waNumber)}" style="display:inline-block;background:${BLUE};color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:11px 20px;border-radius:8px;margin:0 8px 8px 0">Call Customer</a>`;

  return `<!doctype html><html><body style="margin:0;padding:0;background:#eef2f9;font-family:Segoe UI,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f9;padding:24px 12px"><tr><td align="center">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dbe3f2">
    <tr><td style="background:${BLUE_DARK};padding:22px 24px">
      <div style="color:#ffffff;font-size:20px;font-weight:700">${esc(SITE.name)}</div>
      <div style="color:#b9c7e6;font-size:13px;margin-top:4px">New website enquiry</div>
    </td></tr>
    <tr><td style="padding:22px 24px 8px">
      <div style="font-size:13px;color:#5b6b8a;text-transform:uppercase;letter-spacing:.6px">Requirement</div>
      <div style="font-size:22px;font-weight:700;color:${BLUE_DARK};margin-top:4px">${esc(f.product)}</div>
    </td></tr>
    <tr><td style="padding:12px 24px 8px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e3e9f5;border-radius:8px;border-collapse:separate;overflow:hidden">
        ${row('Customer Name', esc(f.name))}
        ${row('Phone / WhatsApp', phoneCell)}
        ${row('Email', emailCell)}
        ${row('Message', messageCell)}
      </table>
    </td></tr>
    <tr><td style="padding:16px 24px 8px">${buttons}</td></tr>
    <tr><td style="padding:12px 24px 22px;color:#8a96ad;font-size:12px">Received ${esc(f.received)} (IST) &middot; via ${esc(SITE.url.replace(/^https?:\/\//, ''))}</td></tr>
  </table>
</td></tr></table></body></html>`;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO;
  if (!apiKey || !to) {
    return Response.json({ success: false, configured: false }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }

  const name = clean(body.name, MAX.name);
  const phone = clean(body.phone, MAX.phone);
  const email = clean(body.email, MAX.email);
  const product = clean(body.product, MAX.product) || 'General Enquiry';
  const message = clean(body.message, MAX.message);

  if (!name || !phone) {
    return Response.json({ success: false, message: 'Name and phone are required.' }, { status: 400 });
  }

  const received = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const recipients = [to, process.env.ENQUIRY_CC].filter(Boolean) as string[];

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM || `${SITE.name} Website <onboarding@resend.dev>`,
        to: recipients,
        reply_to: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined,
        subject: `New Enquiry: ${product} - ${name.replace(/[\r\n]+/g, ' ')}`,
        html: buildHtml({ name, phone, email, product, message, received }),
        text: `New enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nRequirement: ${product}\nMessage: ${message || 'No message'}\nReceived: ${received} IST`,
      }),
    });
    if (!res.ok) {
      return Response.json({ success: false, message: 'Could not send.' }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false, message: 'Could not send.' }, { status: 502 });
  }
}
