
// Google Analytics tracking utility
export const trackEvent = (eventName: string, parameters: {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
} = {}) => {
  console.log('🔍 Attempting to track event:', eventName, parameters);
  
  // Check if gtag is available
  if (typeof window === 'undefined') {
    console.warn('❌ Window object not available (SSR)');
    return;
  }
  
  if (!window.gtag) {
    console.warn('❌ Google Analytics (gtag) not loaded - likely blocked by ad blocker');
    return;
  }
  
  try {
    console.log('✅ Sending event to Google Analytics...');
    window.gtag('event', eventName, parameters);
    console.log('✅ Event tracked successfully:', eventName);
  } catch (error) {
    console.error('❌ Error tracking event:', error);
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

// Debug function to check GA status
export const checkGoogleAnalyticsStatus = () => {
  console.log('🔍 Checking Google Analytics status...');
  
  if (typeof window === 'undefined') {
    console.log('❌ Running on server side');
    return false;
  }
  
  if (!window.gtag) {
    console.log('❌ gtag function not found - Google Analytics likely blocked');
    return false;
  }
  
  if (!window.dataLayer) {
    console.log('❌ dataLayer not found');
    return false;
  }
  
  console.log('✅ Google Analytics appears to be loaded');
  console.log('📊 dataLayer contents:', window.dataLayer);
  return true;
};
