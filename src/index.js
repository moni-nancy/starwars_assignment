import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Movie from './Components/Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Movie />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

