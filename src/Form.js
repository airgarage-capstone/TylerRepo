import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './Form.css'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {firstName: '',
                    lastName:'',
                    email:'',
                    password:'',
                    confirmPass:'',
                    profile:'',
                    dob:'',
                    phoneNum:'',
                    accountType:''
    };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event)
    {
      alert("Hello, "+ this.state.firstName+" "+this.state.lastName);
      event.preventDefault();

      const user = {
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          username: this.state.email,
          password: this.state.password,
          accountType: this.state.accountType,
          dob: this.state.dob,
          entityType: "",
          phone: this.state.phoneNum
      };

      axios.post(`http://staging.airgara.ge/api/register/`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error =>
      {
        var response = "Error";
        for(var key in error.res.data){
          response += key;
          response += ":";
          response += error.res.data[key];
          response += "\n";
        }
        alert(response);
        console.log(error.res.data);
      })
    }
  
    render() {
      return (
        <div className="Form">
            <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <label>
              <input 
                    name = "firstName" 
                    placeholder="First Name"
                    type="text"
                    value = {this.state.firstName} 
                    onChange = {this.handleInputChange}/>
            </label><br/>
            <label>
              <input 
                    name = "lastName" 
                    placeholder="Last Name"
                    type="text"
                    value = {this.state.lastName} 
                    onChange = {this.handleInputChange}/>
            </label><br/>
            <label>
              <input 
                    name = "email" 
                    placeholder="Email"
                    type="email"
                    value = {this.state.email} 
                    onChange = {this.handleInputChange}/>
            </label><br/>
            <label>
              <input 
                    name = "password"
                    placeholder="Password" 
                    type="password"
                    value = {this.state.password} 
                    onChange = {this.handleInputChange}/>
            </label><br/>
            <label>
              <input 
                    name = "confirmPass"
                    placeholder="Confirm Password" 
                    type="password"
                    value = {this.state.confirmPass} 
                    onChange = {this.handleInputChange}/>
            </label><br/>
            <label>
              <input 
                    name = "profile"
                    placeholder="Profile Name"
                    type="text"
                    value = {this.state.profile} 
                    onChange = {this.handleInputChange}/>
            </label><br/>
            <label>
              <select name = "accountType" onChange={this.handleInputChange}>
                      <option value="" selected disabled>How do you want to use Air Garage?</option>
                      <option value="Find parking">Find Parking</option>
                      <option value="List a spot">List a spot</option>
                      <option value="Both">Both</option>
              </select>
            </label><br/>
            <label>
              <input 
                    name = "dob"
                    type="date"
                    value = {this.state.dob} 
                    onChange = {this.handleInputChange}/>
            </label><br/>
            <label>
              <input 
                    name = "phoneNum"
                    placeholder="Phone Number"
                    type="text"
                    value = {this.state.phoneNum} 
                    onChange = {this.handleInputChange}/>
            </label><br/><br/>
            <input type="submit" value="Submit"/>
          </form>
      </div>
      );
    }
  }
  export default Form;