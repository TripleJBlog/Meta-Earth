const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
  countryCode: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },
  countryName: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },
  population: {
    type: Number,
    trim: true,
  },
  gdp: {
    type: Number,
    trim: true,
  },
  money: {
    type: String,
    unique: 1,
    required: true,
    trim: true,
  },
  currency: {
    type: Number,
    trim: true,
  },
  taxRate: {
    type: Number,
    trim: true,
  },
  interestRate: {
    type: Number,
    trim: true,
  },
  inflationRate: {
    type: Number,
    trim: true,
  },
  unemploymentRate: {
    type: Number,
    trim: true,
  },
});

const Country = mongoose.model("Country", countrySchema);
module.exports = { Country };
