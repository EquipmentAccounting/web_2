import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';
import { Provider as RouterProvider } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
);
