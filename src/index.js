import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ProviderContext } from './components/Context';
import App from './App';


ReactDOM.render(
  <ProviderContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProviderContext>,
  document.getElementById('root')
);
