import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Drinks from './Drinks';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Drinks />
  </React.StrictMode>
);

