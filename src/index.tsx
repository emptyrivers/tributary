import React, { StrictMode } from 'react';
import { unstable_createRoot as root } from 'react-dom';
import './style.css';
import App from './modules/App';

root(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
