import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { CartProvider } from './contexts/cartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
);