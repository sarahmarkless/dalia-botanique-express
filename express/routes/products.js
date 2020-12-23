var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
require("encoding");

const getData = async () => {
  try {
    const response = await fetch(
      "https://openapi.etsy.com/v2/shops/DaliaBotanique/listings/active?&api_key=rxny6jmxqxkh4lsii4tzu26g&includes=MainImage,Images"
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

router.get("/", async (req, res, next) => {
  let response = await getData();
  res.send(response);
});

module.exports = router;
