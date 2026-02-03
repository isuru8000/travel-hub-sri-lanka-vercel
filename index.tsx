import React from 'react';
import { createRoot } from 'react-dom/client';
// Fix: Use explicit .tsx extension to resolve the default export correctly
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}