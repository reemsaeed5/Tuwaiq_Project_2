import React, { useState, useEffect } from "react";
//import data from "./data";
import { useParams } from "react-router-dom";
// import InputTodo from './InputTodo';
//import ReactDeleteRow from 'react-delete-row';
//import {nanoid} from 'nanoid;'
import {
  Container,
  Table,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
//import { MDBCol, MDBIcon } from "mdbreact";

export default function Employ() {
  const params = useParams();
  const name = params.name;

  const [data, setData] = useState(null);
  const [allData, setallData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/user");
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

  const [contacts, setContacts]= useState(data);
  const [addFormData, setAddFormData] = useState({
    
    name:'',
    Jobtitle:'',
    email:'',
    Salary:''
  })
  
   function handleAddFormChange (event){
     event.preventDefault();

     const fieldName = event.target.getAttribute('name');
     const fieldValue = event.target.value;

     const newFormData ={...addFormData};
     newFormData[fieldName]= fieldValue;

     setAddFormData(newFormData);

     function handleAdd(event){
      event.preventDefault();
      const newContact = {
        id : addFormData.Id,
        name : addFormData.name, 
        Jobtitle :addFormData.Jobtitle,
        email: addFormData.email,
        salary: addFormData.Salary,
     
     };  
     

    const newContacts=[...contacts, newContact];
     setContacts(newContacts);
     } ;
   };
   return (
    <Container className="myContainer">
      <h4> Your Data:</h4>
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
      {/* <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        /> */}
      {/* </InputGroup> */}
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
                    <td><Form.Check
            type="radio"
            aria-label="radio 1"
            name="status"
            id={`default-radio`}
            label={`delete`}
            
            /></td>
                  </tr>
                );
              })}
   
            {/* { allData.map((id, i) => { return (
            <ReactDeleteRow key={i} data={id} onDelete={ id => { return window.confirm(`Are you sure?`) }}>
                <td>{id.title}</td>
                <td>{id.body}</td>
            </ReactDeleteRow>
            )}) } */}
        
          </tbody>
        </Table>
      )}
      <br />
      {/* <Button variant="outline-primary">Add Employe</Button> {" "}<br /> */}
      <button type="submit" className="form" onSubmit={handleSubmit}>add Employees</button>
           <form  >  
      <input 
      type="text" 
      name="id" 
      required= "required"
      placeholder= " Enter a id..."
/>
<input 
      type="text" 
      name="Name" 
      required= "required"
      placeholder= " Enter a name..."
      onChange={handleAddFormChange}
/>
<input 
      type="text" 
      name="email" 
      required= "required"
      placeholder= " Enter a email..."
      onChange={handleAddFormChange}
/>
<input 
      type="text" 
      name="JobTitle" 
      required= "required"
      placeholder= " Enter a job title..."
      onChange={handleAddFormChange}
/>
<input 
      type="text" 
      name="Salary" 
      required= "required"
      placeholder= " Enter a salary..."
      onChange={handleAddFormChange}
/>

</form>

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
            {allData &&
              allData.map((elem) => {
                return (
                  <tr>
                     <td>{elem.id}</td>
                    <td>{elem.Name}</td>
                    <td>{elem.JobTitle}</td>
                    <td>{elem.vanction}</td>
                    <td>{elem.fromDate}</td>
                    <td>{elem.ToDate}</td>
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
