/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_SITE_URL: string;
  readonly REACT_APP_CHATBOT_URL: string;
  readonly REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
