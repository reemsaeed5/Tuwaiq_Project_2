import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Table,  InputGroup,
  FormControl, } from "react-bootstrap";

export default function Employ() {
  const params = useParams();
  const name = params.name;
  

  const [data, setData] = useState(null);
  const [allData, setallData] = useState(null);
  useEffect(async () => {
    const response = await fetch("/user");
    const data = await response.json();
    const userId = sessionStorage.getItem("Id");
    const info = data.find((user) => user.userId === userId);
    setData(info);
  }, []);
  useEffect(async () => {
    const response = await fetch("http://localhost:5000/user");
    const data = await response.json();
    setallData(data);
  }, []);
  return (
    <Container className="myContainer">
      {data && (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th># id</th>
              <th>Name</th>
              <th>JobTitle</th>
              <th>salary</th>
              <th>ContractValidity</th>
              <th>Tell</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.Name}</td>
              <td>{data.JobTitle}</td>
              <td>{data.Salary}</td>
              <td>{data.ContractValidity}</td>
              <td>{data.Tell}</td>
              <td>{data.email}</td>
            </tr>
          </tbody>
        </Table>
      )}
   
  
  <h4> Employees Data:</h4>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      {data && (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th># id</th>
              <th>Name</th>
              <th>JobTitle</th>
              <th>salary</th>
              <th>ContractValidity</th>
              <th>Tell</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {allData &&
              allData.map((elem) => {
                return (
                  <tr>
                    <td>{elem.id}</td>
                    <td>{elem.Name}</td>
                    <td>{elem.JobTitle}</td>
                    <td>{elem.Salary}</td>
                    <td>{elem.ContractValidity}</td>
                    <td>{elem.Tell}</td>
                    <td>{elem.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
 </Container>
  );
            }
