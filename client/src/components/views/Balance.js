import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Balance() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios.get("/api/users/balance").then((response) => {
      setBalance(response.data);
    });
  }, []);

  const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const FlexItem = styled.div`
    flex: 1;
    overflow: auto;
  `;

  const StyleIcon = styled.img`
    width: 35px;
    height: 35px;
  `;
  return (
    <FlexContainer className="balance">
      <FlexItem>
        <StyleIcon src={require("../../assets/icon_gold.png")} />
        <span className="gold">{balance.gold} G</span>
      </FlexItem>
      <FlexItem>
        <StyleIcon src={require("../../assets/icon_dollar.png")} />
        <span className="cash">{balance.cash}</span>
      </FlexItem>
    </FlexContainer>
  );
}
