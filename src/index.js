import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RentalProvider } from './RentalContext';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RentalProvider>
      <App />
    </RentalProvider>
  </StrictMode>
);
