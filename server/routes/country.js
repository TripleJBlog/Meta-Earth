const express = require("express");
const router = express.Router();
const { Country } = require("../models/Country");

const contryInfo = {
  getCountry: async (req, res) => {
    try {
      const info = await Country.findOne({ countryCode: "KOR" });
      res.status(200).send(info);
      console.log("GET /api/country");
    } catch (e) {
      console.log("error:", e);
      return res.status(500).json({ msg: e.message });
    }
  },
};

async function createCountry(req, res) {
  try {
    const country = await new Country({
      countryCode: "KOR",
      countryName: "Republic of Korea",
      gdp: "1798530000000",
      budget: "-6.1",
      taxRate: "45",
      interestRate: "2.25",
      inflationRate: "6",
      unemploymentRate: "2.9",
    });
    await country.save();
    res.send(country);
  } catch (e) {
    console.log(e);
  }
}

// router.get("/", getCountry);
module.exports = contryInfo;
