declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (id: string | HTMLElement, options: any) => number;
      [key: string]: any; // Optionnel pour d'autres méthodes ou propriétés
    };
  }
}

export {};
