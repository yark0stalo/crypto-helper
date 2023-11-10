import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import currencyData from "./data/currency-data";
import { ExchangeUtility } from "./utils/exchange.js";
import { CryptoController } from "./utils/sparkline.js";

var cryptoController;
let exchange;
export async function Initialize() {
  exchange = new ExchangeUtility();
  cryptoController = new CryptoController(currencyData);
  await exchange.getExchangePrices();
  for (const crypto in currencyData) {
    await cryptoController.getCurrentCryptoPrice(crypto);
  }
}
await Initialize();
let app = <App currencyData={currencyData} />;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{app}</React.StrictMode>
);

for (const cur in currencyData) {
  await cryptoController.getCryptoSparklineData(cur);
  cryptoController.createSparklineChart(cur, cryptoController.sparklines);
}
