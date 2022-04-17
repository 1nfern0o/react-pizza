import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import './scss/app.scss';
import App from './App';
import store from "./redux/store";

const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  // </React.StrictMode>
);
