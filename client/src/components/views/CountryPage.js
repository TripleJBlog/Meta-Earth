import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyleIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export default function Country(props) {
  const [country, setCountry] = useState(0);

  const getCountry = () => {
    axios
      .get("/api/country")
      .then((res) => {
        setCountry(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(getCountry, []);

  return (
    <>
      <StyleIcon src={require("../../assets/flag_korea.png")} />
      <div>국명: {country.countryName}</div>
      <div>인구: {country.population}</div>
      <div>GDP: ${country.gdp}</div>
      <div>화폐: {country.money}</div>
      <div>통화량: {country.currency}million</div>
      <div>세율: {country.taxRate}%</div>
      <div>물가상승률: {country.inflationRate}%</div>
      <div>실업률: {country.unemploymentRate}%</div>
      <div>금리: {country.interestRate}%</div>
    </>
  );
}
