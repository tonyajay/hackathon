import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Hey there fellow Student!</h1>
        <p>
          Search for your favorite course and college and sign up to give
          feedback
        </p>
        {children}
      </div>
    </div>
  );
}
