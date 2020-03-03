import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CollegeProvider from "./context/colleges";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";
import CourseProvider from "./context/courses";

ReactDOM.render(
  <UserProvider>
    <CollegeProvider>
      <CourseProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CourseProvider>
    </CollegeProvider>
  </UserProvider>,
  document.getElementById("root")
);
