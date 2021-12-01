import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Table, Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Employ() {
  const params = useParams();
  const name = params.name;

  const [data, setData] = useState({});
  const [display, setDisplay] = useState("none");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [vacInfo, setVacInfo] = useState([]);
  const [vacReason, setVacReason] = useState("");
  const [allData, setallData] = useState(null);
  // console.log(startDate);

  useEffect(async () => {
    const response = await fetch("/user");
    const data = await response.json();
    const userId = sessionStorage.getItem("Id");
    const info = data.find((user) => user.userId === userId);
    setData(info);
    const final = JSON.parse(localStorage.getItem("VacationRequest"));
    setVacInfo(final);
  }, []);

 

  const sendVacation = () => {
    const vacationList = JSON.parse(localStorage.getItem("VacationRequest"));

    if (vacationList !== null) {
      const userVacation = vacationList.filter((elem) => elem.id === data.id);
      const lastelement = userVacation[userVacation.length - 1];

      const newVacation = {
        id: data.id,
        Name: data.Name,
        JobTitle: data.JobTitle,
        Tell: data.Tell,
        vanction: vacReason,
        vanctionid: parseInt(lastelement.vanctionid) + 1,
        startDate: startDate,
        endDate: endDate,
        state: "Wating ...",
      };
      vacationList.push(newVacation);
      localStorage.setItem("VacationRequest", JSON.stringify(vacationList));
    } else {
      let newVacations = [];
      const newVacation = {
        id: data.id,
        Name: data.Name,
        JobTitle: data.JobTitle,
        Tell: data.Tell,
        vanction: vacReason,
        vanctionid: 1,
        startDate: startDate,
        endDate: endDate,
        state: "Wating ...",
      };
      newVacations.push(newVacation);
      localStorage.setItem("VacationRequest", JSON.stringify(newVacations));
    }
    window.location.href = "/employ";
  };

  return (
    <div>
      <Container className="myContainer">
        <h3>your Data:</h3>
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
        <h3>Sick/Vacation REQUEST:</h3>
        <h4>REQUESTING:</h4>
        <Form>
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`S/sick`}
            onChange={() => [setVacReason("S/sick")]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`V/vaction`}
            onChange={() => [setVacReason("V/vaction")]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`Bre/breeavement Leave`}
            onChange={() => [setVacReason("Bre/breeavement Leave")]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`Flh/floating Holiday`}
            onChange={() => [setVacReason("Flh/floating Holiday")]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`W/wellness holiday`}
            onChange={() => [setVacReason("W/wellness holiday")]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`Fml/fmla`}
            onChange={() => [setVacReason("Fml/fmla")]}
          />
        </Form>
        
        <br></br>
        <Button font-size= "25px"
        text-align= "center"
        color=" rgba(97, 55, 139, 0.521)"
        font-family= 'Times New Roman'
        variant="outline-secondary"
         size="s" onClick={() => setDisplay("block")}>
          Date
        </Button>{" "}
        <div style={{ display: `${display}` }}>
          <label>From: </label>
          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
          <label>To: </label>
          <input
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
        </div>
        <Button
        font-size= "25px"
        text-align= "center"
        color=" rgba(97, 55, 139, 0.521)"
        font-family= 'Times New Roman'
        variant="outline-secondary"
          size="s"
          onClick={() => {
            setDisplay("none");
            sendVacation();
          }}
        >
          save & send
        </Button>{" "}
        {/* __________________________ */}
        {vacInfo && (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th># id</th>
                <th>Name</th>
                <th>JobTitlee</th>
                <th>vanction</th>
                <th>startDate</th>
                <th>endDate</th>
                <th>state.</th>
              </tr>
            </thead>
            <tbody>
              {vacInfo.map((elem) => {
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
    </div>
  );
}

//_____________________________________________________
