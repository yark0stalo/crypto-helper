/* eslint-disable react/prop-types */
import CurrencyCard from "./CurrencyCard";

function CurrencyCardsContainer({ currencies }) {
  let cardsContainer = [];
  for (const cur in currencies) {
    let tempCard = <CurrencyCard curData={currencies[cur]} />;
    cardsContainer.push(tempCard);
  }
  return <>{cardsContainer}</>;
}

export default CurrencyCardsContainer;
