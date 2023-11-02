import { currencyExchangeRates } from "../data/currency-data";

const APP_ID = "b15cf1468ca645f0aff2e898cd2e47e8";

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

export default getExchangePrices;
