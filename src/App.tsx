import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./Router";
import { CartProvider } from "./contexts/cartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </CartProvider>
    </ThemeProvider>
  );
}
