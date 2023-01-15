import React from "react";

export const ErrorMessage = ({ error }) => (
  <main className="container">
    <p style={{ color: "red" }}>ERROR: {error.message}</p>
  </main>
);

export default ErrorMessage;