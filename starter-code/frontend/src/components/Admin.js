import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactDeleteRow from "react-delete-row";
import Admin from '../components/Admin.css';
import {
  Container,
  Table,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";



export default function Employ({ vacationRequests }) {
  const params = useParams();
  const name = params.name;

  // Data to save users
  const [id, setId] = useState(0);
  const [userName, setUserName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState(0);
  const [Tell, setTell] = useState(0);
  const [ContractValidity, setContractValidity] = useState("");
  const [display, setDisplay] = useState("");

  //Get All vacationRequests from Local Storage
  const allRequests = localStorage.getItem("VacationRequest");
  const [emplyees, setEmplyees] = useState("");

  // localStorage.setItem("state1", "accept");

  const allVacations = JSON.parse(allRequests);
  console.log("req: ", allVacations);
  console.log(vacationRequests);
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [count, setCount] = useState(0);
 
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/user");
    const data = await response.json();
    const userId = sessionStorage.getItem("Id");
    const info = data.find((user) => user.userId === userId);

    setData(info);
    console.log("vacation data:", info);
  }, []);

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/user");
    const data = await response.json();
    setAllData(data);
    console.log("data: ", data);
  }, []);

  const usersList = JSON.parse(localStorage.getItem("Users"));
  const saveUser = () => {
    if (usersList !== null) {
      const newUser = {
        id: id,
        Name: userName,
        JobTitle: jobTitle,
        Email: email,
        Salary: salary,
        ContractValidity: ContractValidity,
        Tell: Tell
      };

      usersList.push(newUser);
      localStorage.setItem("Users", JSON.stringify(usersList));
    } else {
      let newUsers = [];
      const newUser = {
        id: id,
        Name: userName,
        JobTitle: jobTitle,
        Email: email,
        Salary: salary,
      };

      newUsers.push(newUser);
      localStorage.setItem("Users", JSON.stringify(newUsers));
    }
    window.location.href = "/admin";
  };

  

  return (
    <Container className="myContainer">
      <h4> Your Data:</h4>
      {data && (
        <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
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
        <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th># id</th>
              <th>Name</th>
              <th>JobTitle</th>
              <th>salary</th>
              <th>ContractValidity</th>
              <th>Tell</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allData &&
              allData.map((elem) => {
                return (
                  <ReactDeleteRow
                    key={elem.id}
                    data={elem}
                    onDelete={(ele) => {
                      return true;
                    }}
                  >
                    <td>{elem.id}</td>
                    <td>{elem.Name}</td>
                    <td>{elem.JobTitle}</td>
                    <td>{elem.Salary}</td>
                    <td>{elem.ContractValidity}</td>
                    <td>{elem.Tell}</td>
                    <td>{elem.email}</td>
                    
                  </ReactDeleteRow>
                );
              })}
            {usersList &&
              usersList.map((elem) => {
                return (
                  <ReactDeleteRow
                    key={elem.id}
                    data={elem}
                    onDelete={(ele) => {
                      return true;
                    }}
                  >
                    <td>{elem.id}</td>
                    <td>{elem.Name}</td>
                    <td>{elem.JobTitle}</td>
                    <td>{elem.Salary}</td>
                    <td>{elem.ContractValidity}</td>
                    <td>{elem.Tell}</td>
                    <td>{elem.Email}</td>
                    
                  </ReactDeleteRow>
                );
              })}
          </tbody>
        </Table>
      )}
      
      <h4>Add New User: </h4>
      <form>
        <input
          type="text"
          name="id"
          required="required"
          placeholder=" Enter a id..."
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          name="Name"
          required="required"
          placeholder=" Enter a name..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder=" Enter a email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="JobTitle"
          required="required"
          placeholder=" Enter a job title..."
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          name="Salary"
          required="required"
          placeholder=" Enter a salary..."
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          type="text"
          name="Tell"
          required="required"
          placeholder=" Enter a Tell..."
          onChange={(e) => setTell(e.target.value)}
        />
        <input
          type="text"
          name="ContractValidity"
          required="required"
          placeholder=" Enter a ContractValidity..."
          onChange={(e) => setContractValidity(e.target.value)}
        />
        <button type="save"  id="save" onClick={() => saveUser()}>
          Save
        </button>
      </form>


      <h4>vacation requests:</h4>
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
              <th>accept.</th>
              <th>riject.</th>
              
            </tr>
          </thead>
          <tbody>
            {allVacations &&
              allVacations.map((elem, i) => {
                return (
                  <tr>
                    <td>{elem.id}</td>
                    <td>{elem.Name}</td>
                    <td>{elem.JobTitle}</td>
                    <td>{elem.vanction}</td>
                    <td>{elem.startDate}</td>
                    <td>{elem.endDate}</td>
                    <td>{elem.state}</td>
                    <td>
                      {" "}
                      <button id="b1"
                        onClick={() => {
                          const data = JSON.parse(
                            localStorage.getItem("VacationRequest")
                          );

                          const foundData = data.find(
                            (found) => found.vanctionid === elem.vanctionid
                          );

                          const index = data.indexOf(foundData);

                          data.splice(index, 1, {
                            JobTitle: foundData.JobTitle,
                            Name: foundData.Name,
                            Tell: foundData.Tell,
                            endDate: foundData.endDate,
                            id: foundData.id,
                            startDate: foundData.startDate,
                            state: "Accept",
                            vanction: foundData.vanction,
                            vanctionid: foundData.vanctionid,
                          });

                          localStorage.setItem(
                            "VacationRequest",
                            JSON.stringify(data)
                          );
                          window.location.href = "/admin";
                        }}
                      >
                        accpet
                      </button>
                    </td>
                    <td>
                      <button id="b1"
                        onClick={() => {
                          const data = JSON.parse(
                            localStorage.getItem("VacationRequest")
                          );

                          const foundData = data.find(
                            (found) => found.vanctionid === elem.vanctionid
                          );

                          const index = data.indexOf(foundData);

                          data.splice(index, 1, {
                            JobTitle: foundData.JobTitle,
                            Name: foundData.Name,
                            Tell: foundData.Tell,
                            endDate: foundData.endDate,
                            id: foundData.id,
                            startDate: foundData.startDate,
                            state: "Riject",
                            vanction: foundData.vanction,
                            vanctionid: foundData.vanctionid,
                          });

                          localStorage.setItem(
                            "VacationRequest",
                            JSON.stringify(data)
                          );
                          window.location.href = "/admin";
                        }}
                      >
                        riject
                      </button>
                    </td>
                    
                  </tr>
                );
              })}
          </tbody>
        </Table>

        //________________________________________________________________//
        
      )}
{data && (
        <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th># id</th>
              <th>Name</th>
              <th>date</th>
              <th>state</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.Name}</td>
              <td>{date}</td>
              <td></td>
              
            </tr>
          </tbody>
        </Table>
      )}
</Container>
  );
}
