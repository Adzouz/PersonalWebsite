declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
      render: (
        id: string | HTMLElement,
        parameters?: Parameters,
        inherit?: boolean
      ) => number;
    };
  }
}

export {};
