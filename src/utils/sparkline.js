import currencyData from "../data/currency-data.js";

/* eslint-disable no-undef */
let color = "#FFC633";
let shadowColor = "rgba(0,0,0,0.5)";
let API_URL = [
  "https://api.coingecko.com/api/v3/coins/",
  "CRYPTO_NAME",
  "?sparkline=true",
];

//let sparklines = {};

function getCryptoSparkline(currencyName) {
  console.log(currencyName);
  fetch(API_URL[0] + currencyName + API_URL[2])
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      //console.log(data["market_data"]);
      //console.log(data["market_data"]["sparkline_7d"]);
      let sparklinePrices = data["market_data"]["sparkline_7d"]["price"];
      currencyData[currencyName].price =
        sparklinePrices[sparklinePrices.length - 1];
      sparklines[currencyName] = sparklinePrices;
      return sparklinePrices;
    })
    .then((sparklinePrices) => {
      createSparkline(currencyName, sparklinePrices);
    });
}

function createSparkline(currencyName, sparklinePrices) {
  anychart.onDocumentReady(function () {
    let container = document.querySelector(
      `#${currencyName}-sparkline-container`
    );
    var stage = anychart.graphics.create(container);

    // create charts
    let chart1 = anychart.sparkline();
    let chart2 = anychart.sparkline();
    let data = [];
    for (let i = 0; i < sparklinePrices.length; i += 7) {
      data.push(sparklinePrices[i]);
    }
    data.push(sparklinePrices[167]);
    // create data for both charts
    chart1.data(data);
    chart2.data(data);
    // set charts dimensions and postition
    chart1.bounds(0, 0, 480, 80);
    chart2.bounds(0, 1, 480, 80);
    // set container id for the charts
    chart1.container(stage);
    chart2.container(stage);
    //sparklines coloring
    chart1.fill(color).stroke({ color: color, thickness: 2 });
    chart2.fill(shadowColor).stroke({ color: shadowColor, thickness: 2 });
    chart1.background("rgba(1,1,1,0.0)");
    chart2.background("rgba(1,1,1,0.0)");
    // initiate chart drawing
    chart2.draw();
    chart1.draw();
    document.querySelector(".anychart-credits").remove();
  });
}

export default getCryptoSparkline;

export class CryptoController {
  constructor(currencyData) {
    this.cryptoData = currencyData;
    this.sparklines = {};
  }
  cryptoData;
  sparklines;
  color = "#FFC633";
  shadowColor = "rgba(0,0,0,0.5)";
  API_URL = [
    "https://api.coingecko.com/api/v3/coins/",
    "CRYPTO_NAME",
    "?sparkline=true",
  ];

  async getCurrentCryptoPrice(cryptoName) {
    let response = await fetch(API_URL[0] + cryptoName);
    let data = await response.json();
    currencyData[cryptoName].price = data.market_data.current_price.usd;
  }

  async getCryptoSparklineData(cryptoName) {
    let response = await fetch(API_URL[0] + cryptoName + API_URL[2]);
    let data = await response.json();
    this.sparklines[cryptoName] = await data["market_data"]["sparkline_7d"][
      "price"
    ];
  }

  async updateAllCryptoPrices() {
    for (const crypto in currencyData) {
      cryptoController.getCurrentCryptoPrice(crypto);
    }
  }

  async updateAllCryptoSparklinesData() {
    for (const crypto in currencyData) {
      await cryptoController.getCryptoSparklineData(crypto);
    }
  }

  async createSparklineChart(cryptoName, sparklines) {
    anychart.onDocumentReady(function () {
      let container = document.querySelector(
        `#${cryptoName}-sparkline-container`
      );
      var stage = anychart.graphics.create(container);

      // create charts
      let chart1 = anychart.sparkline();
      let chart2 = anychart.sparkline();
      let chartData = [];
      for (let i = 0; i < sparklines[cryptoName].length; i += 7) {
        chartData.push(sparklines[cryptoName][i]);
      }
      chartData.push(sparklines[cryptoName][167]);
      // create data for both charts
      chart1.data(chartData);
      chart2.data(chartData);
      // set charts dimensions and postition
      chart1.bounds(0, 0, 480, 80);
      chart2.bounds(0, 1, 480, 80);
      // set container id for the charts
      chart1.container(stage);
      chart2.container(stage);
      //sparklines coloring
      chart1.fill(color).stroke({ color: color, thickness: 2 });
      chart2.fill(shadowColor).stroke({ color: shadowColor, thickness: 2 });
      chart1.background("rgba(1,1,1,0.0)");
      chart2.background("rgba(1,1,1,0.0)");
      // initiate chart drawing
      chart2.draw();
      chart1.draw();
      document.querySelector(".anychart-credits").remove();
    });
  }
}
