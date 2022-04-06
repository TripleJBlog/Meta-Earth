import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";

const StyleBody = styled.body`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyleForm = styled.div`
  width: 100%;
  color: white;
  border: 1px solid white;
`;

function LoginPage(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      }
    });
  };

  const Login = () => {
    return (
      <>
        <Container>
          <Row>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </>
    );
  };

  return (
    <StyleBody>
      <div
      // style={{
      // }}
      >
        <StyleForm>
          <Login></Login>
        </StyleForm>

        {/* <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}></input>
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        ></input>
        <br />
        <button type="submit">login</button>
      </form> */}
      </div>
    </StyleBody>
  );
}

export default LoginPage;
