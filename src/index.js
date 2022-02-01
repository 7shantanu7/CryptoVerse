import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CryptoCurrency from "./CryptoCurrency";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <React.StrictMode>
    <CryptoCurrency>
      <App />
    </CryptoCurrency>
  </React.StrictMode>,

  document.getElementById("root")
);
