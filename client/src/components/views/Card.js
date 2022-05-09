import React, { useState } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";

/*
1. Card Class
2. Defaults 
*/
const axios = require("axios");

function updateBalance(c) {
  axios
    .get("/api/user/changeBalance")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function InputWithButtons(props) {
  const [count, setCount] = useState(0);

  function changeNumber(n) {
    if (n < 0 && count <= 0) return;
    setCount(count + n);
  }

  return (
    <InputGroup>
      <Button
        variant="outline-secondary"
        id="button-addon1"
        onClick={() => changeNumber(-1)}
      >
        -
      </Button>
      <FormControl
        className="text-center"
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        placeholder={count}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={() => changeNumber(1)}
      >
        +
      </Button>
      <Button onClick={() => updateBalance(count)}>ok</Button>
    </InputGroup>
  );
}

function ListLayout(props) {
  return (
    <div className="styleCard" id={props.id}>
      <div style={{ width: props.width + "px" }}>
        <Container fluid>
          <Row className="">
            <Col>
              <span>{props.id + 1} </span>
              <span className="styleCardTitle">{props.title} </span>
              {/* <span className="styleLocationLabel">{props.location} </span> */}
            </Col>
            <Col sm={6}>
              <span className="styleDescription">{props.description} </span>
            </Col>
            <Col sm={1}>
              <span className="styleDescription">{props.stock} </span>
            </Col>
            <span style={{ maxWidth: 180, minWidth: 150 }}>
              <InputWithButtons stock={props.stock} />
            </span>
          </Row>
        </Container>
      </div>
    </div>
  );
}

// 1. Card Class /////////////////////////////////////////////
export default function Card(props) {
  return <ListLayout {...props} />;
}
