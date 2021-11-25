import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Admin from "./components/Admin";
import swal from "sweetalert";
import "./login.css";
import axios from "axios";
export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigation = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("user/", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          if (response.data.role === "Admin") {
            nav("/admin");
          } else if (response.data.role === "Boss") {
            nav("/boss");
          } else {
            nav("/employ");
          }
          sessionStorage.setItem("Id", response.data.id);
        }
      })
      .catch((err) => {
        console.log(err);
        swal("not correct");
      });
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label id="h">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label id="h">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
