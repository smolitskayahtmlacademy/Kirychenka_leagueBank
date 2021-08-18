import 'normalize.css';
import './scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
