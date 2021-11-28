import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Table, Form, Button } from "react-bootstrap";
// import Calendar from "react-select-date";
import axios from "axios";

export default function Employ({setVacationRequests, vacationRequests}) {
  const params = useParams();
  const name = params.name;

  const [data, setData] = useState({});
  const [display, setDisplay] = useState("none");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [vacInfo, setVacInfo] = useState({})
  const [vacReason, setVacReason] = useState("");

  useEffect(async () => {
    const response = await fetch("/user");
    const data = await response.json();
    const userId = sessionStorage.getItem("Id");
    const info = data.find((user) => user.userId === userId);
    setData(info);
  }, []);
  
  useEffect(() => {
    setVacInfo({Name: data.Name, JobTitle: data.JobTitle})
  }, [data])

const sendVacation = ()=>{
  axios({
    method: 'post',
    url: 'http://localhost:5000/employ/employ/2',
    data: {
      id:data.id,
      Name: data.Name,
      JobTitle: data.JobTitle,
      Tell:data.Tell,
      vanction: vacReason,
      startDate:startDate,
      endDate: endDate,
      state:'send',
    }
  }).then((response) => {
      console.log(response)
      setVacInfo(response.data)
      setVacationRequests(vacationRequests.concat(response.data))
      console.log(vacationRequests)
  }) 
  .catch((error)=>{
      console.log(error)
  })
}
  
  return (
    <div>
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
        <h3>Sick/Vaction REQUEST:</h3>
        <h4>REQUESTING:</h4>
        <Form>
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`S/sick`}
            onChange={()=>[
            setVacReason("S/sick")
            ]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`V/vaction`}
            onChange={()=>[
              setVacReason("V/vaction")
            ]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`Bre/breeavement Leave`}
            onChange={()=>[
              setVacReason("Bre/breeavement Leave")
            ]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`Flh/floating Holiday`}
            onChange={()=>[
              setVacReason("Flh/floating Holiday")
            ]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`W/wellness holiday`}
            onChange={()=>[
              setVacReason("W/wellness holiday")
            ]}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`Fml/fmla`}
            onChange={()=>[
              setVacReason("Fml/fmla")
            ]}
          />
        </Form>
        {/* <Form.Select>
    <option>Default select</option>
    <option>Default select</option>
  </Form.Select> */}
        <br></br>
        <Button variant="primary" size="s" onClick={() => setDisplay("block")}>
          Date
        </Button>{" "}
        {console.log(display)}
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
          variant="primary"
          size="s"
          active
          onClick={() => {
            setDisplay("none");
            sendVacation()
          }}
        >
          save & send
        </Button>{" "}
        );

        {/* __________________________ */}
       
        {data && (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th># id</th>
                <th>Name</th>
                <th>JobTitle</th>
                <th>vanction</th>
                <th>from Date</th>
                <th>To Date</th>
                <th>state.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{vacInfo.id}</td>
                <td>{vacInfo.Name}</td>
                <td>{vacInfo.JobTitle}</td>
                <td>{vacInfo.vanction}</td>
                <td>{vacInfo.startDate}</td>
                <td>{vacInfo.endDate}</td>
                <td>{vacInfo.state}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}

//_____________________________________________________
