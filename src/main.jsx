import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import getCryptoSparkline from "../public/sparkline.js";
import currencyData from "./data/currency-data";
import getExchangePrices from "./utils/exchange.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App currencyData={currencyData} />
  </React.StrictMode>
);
for (const cur in currencyData) {
  getCryptoSparkline(cur);
}
getExchangePrices();
