import './hacks/hack-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {AuthProvider} from './context/auth-context';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
