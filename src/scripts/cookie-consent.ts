// Aviso de cookies (LGPD): preferencia em localStorage['lrt-cookie-consent'].
const KEY = 'lrt-cookie-consent';
const banner = document.getElementById('cookie-consent');
const accept = document.getElementById('cookie-consent-accept');

let accepted = false;
try {
  accepted = localStorage.getItem(KEY) === '1';
} catch {}

if (banner && accept && !accepted) {
  banner.hidden = false;
  accept.addEventListener('click', () => {
    try {
      localStorage.setItem(KEY, '1');
    } catch {}
    banner.hidden = true;
  });
}

export {};
