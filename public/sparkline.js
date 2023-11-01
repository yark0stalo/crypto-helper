import currencyData from "../src/data/currency-data";

/* eslint-disable no-undef */
let color = "#FFC633";
let shadowColor = "rgba(0,0,0,0.5)";
let API_URL = [
  "https://api.coingecko.com/api/v3/coins/",
  "CRYPTO_NAME",
  "?sparkline=true",
];

function getCryptoSparkline(currencyName) {
  fetch(API_URL[0] + currencyName + API_URL[2])
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      //console.log(data["market_data"]);
      //console.log(data["market_data"]["sparkline_7d"]);
      let sparklinePrices = data["market_data"]["sparkline_7d"]["price"];
      currencyData[currencyName].price =
        sparklinePrices[sparklinePrices.length - 1];
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
