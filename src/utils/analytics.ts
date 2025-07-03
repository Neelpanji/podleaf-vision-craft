
// Google Analytics tracking utility
export const trackEvent = (eventName: string, parameters: {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
} = {}) => {
  console.log('Tracking event:', eventName, parameters);
  
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', eventName, parameters);
      console.log('Event tracked successfully');
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  } else {
    console.warn('Google Analytics not available');
  }
};

export const trackFormSubmit = (formName: string, additionalParams = {}) => {
  trackEvent('form_submit', {
    event_category: 'Form',
    event_label: formName,
    value: 1,
    ...additionalParams
  });
};

export const trackButtonClick = (buttonName: string, additionalParams = {}) => {
  trackEvent('click', {
    event_category: 'Button',
    event_label: buttonName,
    value: 1,
    ...additionalParams
  });
};

export const trackConversion = (conversionName: string, additionalParams = {}) => {
  trackEvent('conversion', {
    event_category: 'Conversion',
    event_label: conversionName,
    value: 1,
    ...additionalParams
  });
};
