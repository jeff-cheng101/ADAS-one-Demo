import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AIChatWidget from './AIChatWidget';
import AIChatPanel from './AIChatPanel';

const container = document.getElementById('root');
if (!container) throw new Error('Root container #root not found');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <AIChatWidget />
    <AIChatPanel />
  </React.StrictMode>
);

reportWebVitals();


