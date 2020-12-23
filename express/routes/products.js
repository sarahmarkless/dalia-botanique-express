var express = require("express");
var router = express.Router();
var fetch = require("node-fetch").default;
require("encoding");

const getData = async () => {
  console.log("GETDATA");
  try {
    console.log("in try before fetch", response);
    const response = await fetch(
      "https://openapi.etsy.com/v2/shops/DaliaBotanique/listings/active?&api_key=rxny6jmxqxkh4lsii4tzu26g&includes=MainImage,Images"
    );
    console.log("in try after", response);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("in catch");
    console.error(error);
  }
};

router.get("/", async (req, res, next) => {
  console.log("PRODUCTS");
  let response = await getData();
  res.send(response);
});

module.exports = router;
