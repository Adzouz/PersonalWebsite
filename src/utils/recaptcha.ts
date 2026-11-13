const SCRIPT_URL = 'https://www.google.com/recaptcha/api.js';
const TIMEOUT_MS = 10_000;

const siteKey = () => import.meta.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY;

let loading: Promise<void> | undefined;

// Adds the reCAPTCHA v3 script once. It is loaded on demand, not with the page.
export const loadRecaptcha = () => {
  loading ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `${SCRIPT_URL}?render=${siteKey()}`;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loading = undefined;
      script.remove();
      reject(new Error('reCAPTCHA failed to load'));
    };
    document.body.appendChild(script);
  });
  return loading;
};

// A token that the server checks with Google, for one `action`
export const recaptchaToken = async (action: string) => {
  await loadRecaptcha();
  const token = new Promise<string>((resolve, reject) =>
    window.grecaptcha.ready(() =>
      window.grecaptcha.execute(siteKey(), { action }).then(resolve, reject)
    )
  );
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('reCAPTCHA timed out')), TIMEOUT_MS)
  );
  return Promise.race([token, timeout]);
};
