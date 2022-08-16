import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> {/* any component in provider can access the context value inside the provider*/}
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

