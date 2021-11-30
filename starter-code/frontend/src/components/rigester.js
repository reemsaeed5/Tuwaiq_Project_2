import React from "react";

// import { Container } from "react-bootstrap";

import { useNavigate } from "react-router";

import { useState } from "react";

import axios from "axios";

 

export default function Register() {

  const nav = useNavigate();

  const [name, setName] = useState("");

  const [id, setID] = useState("");

  const [password, setPassword] = useState("");
  const [Jobtitle, setJobtitle] = useState("");
  const [Salary, setSalary] = useState("");
  const [ContractValidity, setContractValidity]=useState("");
  const [Tell, setTell] = useState("");
// setPassword(e.target.value)

  function form() {

    return id && name && password && Jobtitle && Salary && ContractValidity && Tell;

  }

 

  function handleSubmit(event) {

    event.preventDefault();
    axios

      .post("http://localhost:5000/users", {

        name: name,

        id: id,

        password: password,
        Jobtitle: Jobtitle,
        Salary: Salary,
        ContractValidity:ContractValidity,
        Tell:Tell,

      })

      .then((response) => {

        console.log(response.data);

      })

      .catch((err) => {

        console.log(err.response.data);

      });

  }

  return (

    <form className="form" onSubmit={handleSubmit}>

      <h3>Register</h3>

      <img

        src=""

        height="100px"

      />

 

      <div className="form-group">

        <label>Name</label>

        <input

          type="name"

          className="form-control"

          placeholder="Enter your name"

          value={name} onChange={(e) => setName(e.target.value)}/>

      </div>

 

      <div className="form-group">

        <label>ID</label>

        <input

          type="text"

          className="form-control"

          placeholder="Enter your ID`"

          value={id} onChange={(e) => setID(e.target.value)}/>

      </div>

 

      <div className="form-group">

        <label>Password</label>

        <input

          type="password"

          className="form-control"

          placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}

 
          

        />

      </div>

 

      <div className="form-group"></div>

 

      <button type="submit" id="bg" className="btn btn- btn-block">

        Register

      </button>

      <p className="forgot-password text-right">

        Sign in{" "}

        <a href="#" onClick={() => nav("/login")}>

          Login?

        </a>

      </p>

    </form>

  );

}