var express = require("express");
var router = express.Router();
var axios = require("axios");

const getData = async () => {
  try {
    const response = await axios.get(
      "https://openapi.etsy.com/v2/shops/DaliaBotanique/listings/active?&api_key=rxny6jmxqxkh4lsii4tzu26g&includes=MainImage,Images"
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

router.get("/", async (req, res, next) => {
  let response = await getData();
  res.send(response);
});

module.exports = router;
