
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkGoogleAnalyticsStatus } from './utils/analytics'

// Check GA status after a short delay to allow scripts to load
setTimeout(() => {
  checkGoogleAnalyticsStatus();
}, 2000);

createRoot(document.getElementById("root")!).render(<App />);
