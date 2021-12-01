import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Table, InputGroup, FormControl } from "react-bootstrap";

export default function Employ() {
  const params = useParams();
  const name = params.name;
  const allRequests = JSON.parse(localStorage.getItem("VacationRequest"));

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
      <h4> your Data</h4>
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
<h4>vacation Data:</h4>
      {data && (
        <Table
          striped
          bordered
          hover
          size="sm"
          style={{ textAlign: "center" }}
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th># id</th>
              <th>Name</th>
              <th>JobTitle</th>
              <th>vanction</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>state.</th>
              {/* <th>state.</th> */}
            </tr>
          </thead>
          <tbody>
            {allRequests &&
              allRequests.map((elem, i) => {
                return (
                  <tr>
                    <td>{elem.id}</td>
                    <td>{elem.Name}</td>
                    <td>{elem.JobTitle}</td>
                    <td>{elem.vanction}</td>
                    <td>{elem.startDate}</td>
                    <td>{elem.endDate}</td>
                    <td>{elem.state}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
