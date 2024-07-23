import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MAX_PLACE_CARDS } from './components/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App maxPlaceCards = {MAX_PLACE_CARDS} />
  </React.StrictMode>
);
