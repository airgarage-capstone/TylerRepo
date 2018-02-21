import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {firstName: '',
                    lastName:'',
                    email:'',
                    password:'',
                    profile:'',
                    dob:'',
                    phoneNum:''
    };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <div className="Form">
            <form>
            <label>
              First Name<br/>
              <input 
                    name = "firstName" 
                    type="text"
                    value = {this.state.firstName} 
                    onChange = {this.handleInputChange}/>
            </label><br/><br/>
            <label>
              Last Name<br/>
              <input 
                    name = "lastName" 
                    type="text"
                    value = {this.state.lastName} 
                    onChange = {this.handleInputChange}/>
            </label><br/><br/>
            <label>
              Email<br/>
              <input 
                    name = "email" 
                    type="text"
                    value = {this.state.email} 
                    onChange = {this.handleInputChange}/>
            </label><br/><br/>
            <label>
              Password<br/>
              <input 
                    name = "password" 
                    type="password"
                    value = {this.state.password} 
                    onChange = {this.handleInputChange}/>
            </label><br/><br/>
            <label>
              Profile<br/>
              <input 
                    name = "profile" 
                    type="text"
                    value = {this.state.profile} 
                    onChange = {this.handleInputChange}/>
            </label><br/><br/>
            <label>
              Date of Birth<br/>
              <input 
                    name = "dob" 
                    type="date"
                    value = {this.state.dob} 
                    onChange = {this.handleInputChange}/>
            </label><br/><br/>
            <label>
              Phone Number<br/>
              <input 
                    name = "phoneNum" 
                    type="text"
                    value = {this.state.phoneNum} 
                    onChange = {this.handleInputChange}/>
            </label><br/><br/>
            <input type="submit" value="Submit" />
          </form>
      </div>
      );
    }
  }
  export default Form;