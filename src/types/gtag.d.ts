
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set' | 'consent',
      targetId: string,
      config?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        description?: string;
        fatal?: boolean;
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
