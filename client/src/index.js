import React from 'react';
import ReactDOM from 'react-dom/client';
// Сбрасываем базовые стили
import 'normalize.css';
// Для роутинга
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
