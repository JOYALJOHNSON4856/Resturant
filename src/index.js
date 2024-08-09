import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import './styles/global.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import TokenAuth from './context/TokenAuth';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
   <TokenAuth>
   <App />
   </TokenAuth>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>
);
