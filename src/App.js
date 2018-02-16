import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {firstNameValue: '', lastNameValue: '', emailValue: '', passValue: '', profileValue: '', dobValue: '', phoneValue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.firstNameValue+' '+this.state.lastNameValue+'\n'+
          'An email was submitted: '+this.state.emailValue+'\n'+
          'A password was submitted: '+this.state.passValue+'\n'+
          'A profile was submitted: '+this.state.profileValue+'\n'+
          'A date of birth was submitted: '+this.state.dobValue+'\n'+
          'A phone number was submitted: '+this.state.phoneValue+'\n');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.firstNameValue} onChange={this.handleChange} />
        </label><br></br><br></br>
        <label>
          Last Name:
          <input type="text" value={this.state.lastNameValue} onChange={this.handleChange} />
        </label><br></br><br></br>
        <label>
          Email:
          <input type="text" value={this.state.emailValue} onChange={this.handleChange} />
        </label><br></br><br></br>
        <label>
          Password:
          <input type="text" value={this.state.passValue} onChange={this.handleChange} />
        </label><br></br><br></br>
        <label>
          Profile:
          <input type="text" value={this.state.profileValue} onChange={this.handleChange} />
        </label><br></br><br></br>
        <label>
          Date of Birth:
          <input type="text" value={this.state.dobValue} onChange={this.handleChange} />
        </label><br></br><br></br>
        <label>
          Phone Number:
          <input type="text" value={this.state.phoneValue} onChange={this.handleChange} />
        </label><br></br><br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
