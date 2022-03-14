import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import reportWebVitals from './reportWebVitals';

const cardsLayout = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4
};

ReactDOM.render(
  <React.StrictMode>
    <App layout={cardsLayout}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
