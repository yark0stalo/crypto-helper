const currencyData = {
  bitcoin: {
    abbr: "BTC",
    curName: "Bitcoin",
    logoPath: "src/assets/images/bitcoin.svg",
    price: 0,
  },
  ethereum: {
    abbr: "ETH",
    curName: "Ethereum",
    logoPath: "src/assets/images/ethereum.svg",
    price: 0,
  },
  tron: {
    abbr: "TRX",
    curName: "Tron",
    logoPath: "src/assets/images/tron.svg",
    price: 0,
  },
  solana: {
    abbr: "SOL",
    curName: "Solana",
    logoPath: "src/assets/images/solana.svg",
    price: 0,
  },
  dogecoin: {
    abbr: "DOGE",
    curName: "Dogecoin",
    logoPath: "src/assets/images/doge.svg",
    price: 0,
  },
};

export let currencyExchangeRates = { RUB: 0, EUR: 0 };

export default currencyData;
