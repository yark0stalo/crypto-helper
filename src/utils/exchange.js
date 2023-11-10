import { currencyExchangeRates } from "../data/currency-data";

const APP_ID = "b15cf1468ca645f0aff2e898cd2e47e8";
/*
function getExchangePrices() {
  return fetch(
    "https://openexchangerates.org/api/latest.json?app_id=" + APP_ID
  ).then((response) => {
    response.json().then((result) => {
      currencyExchangeRates.RUB = result.rates["RUB"];
      currencyExchangeRates.EUR = result.rates["EUR"];
    });
  });
}

export default getExchangePrices; */

export class ExchangeUtility {
  constructor() {}

  APP_ID = "b15cf1468ca645f0aff2e898cd2e47e8";
  currencyExchangeRates = { RUB: 0, EUR: 0 };

  async getExchangePrices() {
    let response = await fetch(
      "https://openexchangerates.org/api/latest.json?app_id=" + APP_ID
    );
    let result = await response.json();
    currencyExchangeRates.RUB = result.rates["RUB"];
    currencyExchangeRates.EUR = result.rates["EUR"];
  }
}
