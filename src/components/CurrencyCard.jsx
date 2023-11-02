/* eslint-disable react/prop-types */
import "./CurrencyCard.css";
import { currencyExchangeRates } from "../data/currency-data";

function CurrencyCard({ curData }) {
  let usdPrice = curData.price.toFixed(2);
  let rublePrice = (usdPrice * currencyExchangeRates.RUB).toFixed(2);
  let euroPrice = (usdPrice * currencyExchangeRates.EUR).toFixed(2);
  const sparklineContainerId =
    curData.curName.toLowerCase() + "-sparkline-container";

  const sparklineContainer = (
    <div id={sparklineContainerId} className="sparkline-cointainer"></div>
  );
  return (
    <div className="currency-card">
      <div className="currency-header">
        <div className="currency-decription">
          <img
            className="currency-logo"
            src={"./" + curData.logoPath}
            alt="cur-logo"
          />
          <p className="currency-name">
            {curData.abbr + " " + curData.curName}
          </p>
        </div>
        <ul className="currency-cost">
          <li className="currency-cost-item">{usdPrice}&#36;</li>
          <li className="currency-cost-item">{euroPrice}&euro;</li>
          <li className="currency-cost-item">{rublePrice}&#8381;</li>
        </ul>
      </div>
      {sparklineContainer}
    </div>
  );
}

export default CurrencyCard;
