import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 
      The Provider component makes the Redux store available to any nested components
      that need to access the Redux store. We wrap our root App component with it.
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
