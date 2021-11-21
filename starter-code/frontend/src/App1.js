import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { message: '' };
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("A name was submitted:" + JSON.stringify({ name: this.state.value }));
        fetch("/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: this.state.value }),
            }).then(res => res.json())
            .then(response => alert('Success:', JSON.stringify(response)))
            .catch(error => console.log('Error:', error));
    }


    componentDidMount() {
        console.log('componentDidMount');
        axios.get("http://localhost:5000/user")
        .then(resp=>{
            console.log(resp)
            this.setState({
                message: resp.data[0].name
            });
        }).catch(err=>{
            console.log(err)
        })
    //     fetch("/user")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log('Result');
    //                 this.setState({
    //                     message: result.message
    //                 });
    //             },
    //             (error) => {
    //                 console.log(error);
    //                 this.setState({
    //                     error
    //                 });
    //             }
    //         )
     }
        
        // fetch("http://localhost:5000/user")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log('Result');
        //             this.setState({
        //                 message: result
        //             });
        //         }
        //     ).catch((error) => {
        //         console.log(error);
        //         this.setState({
        //             error
        //         });
        //     })
    
    render() {
        const { error, message } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else
            return (
                <div className="App">
                    <link
                     rel="stylesheet"
                     href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                     integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                     crossOrigin="anonymous"/>
                    <p>` ${message}`</p>
                    <Form id="formName" onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Form.Label>Enter your id:</Form.Label>
                        <Form.Control type="text" placeholder="Enter id" id="id" name="id" onChange={this.handleChange}/>
                        <Form.Label>Enter your password:</Form.Label>
                        <Form.Control type="text" placeholder="Enter password" id="passwoord" name="password" onChange={this.handleChange}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                </div>
            );

    }

}
export default App;







