import React, { Component } from 'react';
import logo from './logo.svg';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="Form">
        <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" firstName = "First Name" />
        </label><br></br><br></br>
        <label>
          Last Name:
          <input type="text" lastName = "Last Name" />
        </label><br></br><br></br>
        <label>
          Email:
          <input type="text" email = "" />
        </label><br></br><br></br>
        <label>
          Password:
          <input type="text" password = "" />
        </label><br></br><br></br>
        <label>
          Profile:
          <input type="text" profile = "" />
        </label><br></br><br></br>
        <label>
          Date of Birth:
          <input type="text" dob = "" />
        </label><br></br><br></br>
        <label>
          Phone Number:
          <input type="text" phoneNumber = "" />
        </label><br></br><br></br>
        <input type="submit" value="Submit" />
      </form>
      </div>
      );
    }
  }
  export default Form;