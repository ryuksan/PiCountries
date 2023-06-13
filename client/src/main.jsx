import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store';
import { createRoot } from "react-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);