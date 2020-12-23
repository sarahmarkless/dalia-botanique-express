var express = require("express");
var router = express.Router();
var axios = require("axios");

const getData = async () => {
  console.log("GETDATA");
  try {
    const response = await axios.get(
      "https://openapi.etsy.com/v2/shops/DaliaBotanique/listings/active?&api_key=rxny6jmxqxkh4lsii4tzu26g&includes=MainImage,Images"
    );
    console.log("in try after", response);
    return response.data.results;
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
