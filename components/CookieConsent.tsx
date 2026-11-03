'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie__box">
        <p className="cookie__text">
          We use cookies to improve your browsing experience and analyse site traffic. By
          continuing to use this website, you agree to our use of cookies.
        </p>
        <div className="cookie__actions">
          <button type="button" className="btn btn--y cookie__btn" onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
