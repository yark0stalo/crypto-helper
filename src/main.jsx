import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import currencyData from "./data/currency-data";
import { ExchangeUtility } from "./utils/exchange.js";
import { CryptoController } from "./utils/sparkline.js";

let root = document.getElementById("root");

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

let app;

Initialize().then(() => {
  app = (
    <App
      currencyData={currencyData}
      cryptoController={cryptoController}
      exchange={exchange}
    />
  );

  ReactDOM.createRoot(root).render(<React.StrictMode>{app}</React.StrictMode>);

  for (const cur in currencyData) {
    cryptoController
      .getCryptoSparklineData(cur)
      .then(() =>
        cryptoController.createSparklineChart(cur, cryptoController.sparklines)
      );
  }
});
