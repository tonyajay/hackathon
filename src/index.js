import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CollegeProvider from "./context/colleges";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";

ReactDOM.render(
  <UserProvider>
    <CollegeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CollegeProvider>
  </UserProvider>,
  document.getElementById("root")
);
