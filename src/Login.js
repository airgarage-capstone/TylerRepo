import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                    email:'',
                    password:'',
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
      event.preventDefault();
      var user = {
        username: this.state.email,
        password: this.state.password
      };
      axios.post(`https://staging.airgara.ge/api/register/`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  
    render() {
      return (
        <div className="Form">
            <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
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
            <input type="submit" value="Submit"/>
          </form>
      </div>
      );
    }
  }
  export default Login;