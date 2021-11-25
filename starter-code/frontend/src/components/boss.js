import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

export default function Employ() {
  const params = useParams();
  const name = params.name;

  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch("/user");
    const data = await response.json();
    const userId = sessionStorage.getItem("Id");
    const info = data.find((user) => user.userId === userId);
    setData(info);
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
    </Container>
  );
}

