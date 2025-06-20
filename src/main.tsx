import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import { ThemeProvider } from './themes/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<Provider store={store}>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</Provider>

  </React.StrictMode>
);