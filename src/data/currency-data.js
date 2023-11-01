const currencyData = {
  bitcoin: {
    abbr: "BTC",
    curName: "Bitcoin",
    logoPath: "../bitcoin.svg",
    price: 0,
  },
  ethereum: {
    abbr: "ETH",
    curName: "Ethereum",
    logoPath: "../ethereum.svg",
    price: 0,
  },
  tron: { abbr: "TRX", curName: "Tron", logoPath: "../tron.svg", price: 0 },
  solana: {
    abbr: "SOL",
    curName: "Solana",
    logoPath: "../solana.svg",
    price: 0,
  },
  dogecoin: {
    abbr: "DOGE",
    curName: "Dogecoin",
    logoPath: "../doge.svg",
    price: 0,
  },
};

export let currencyExchangeRates = { RUB: 0, EUR: 0 };

export default currencyData;
