import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import getCryptoSparkline from "./utils/sparkline.js";
import currencyData from "./data/currency-data";
import getExchangePrices from "./utils/exchange.js";

let app = <App currencyData={currencyData} />;
for (const cur in currencyData) {
  getCryptoSparkline(cur);
}
getExchangePrices().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>{app}</React.StrictMode>
  );
});
