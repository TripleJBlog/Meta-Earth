const router = require("express").Router();
const country = require("./country");

router.get("/country", country.getCountry);
module.exports = router;
