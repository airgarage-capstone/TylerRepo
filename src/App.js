import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Login from './Login';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form>
        </Form>
        <Login>
        </Login>
        <div className="container">
          <div className="block"><Card spotName="Tyler's spot" price={50} quantity={2} allDay={true}/></div>
          <div className="block"><Card spotName="Jim's spot" price={30} quantity={1} allDay={false}/></div>
          <div className="block"><Card spotName="Bob's spot" price={30} quantity={3} allDay={true}/></div>
          <div className="block"><Card spotName="Kat's spot" price={50} quantity={1} allDay={true}/></div>
          <div className="block"><Card spotName="Kate's spot" price={30} quantity={2} allDay={false}/></div>
          <div className="block"><Card spotName="Santa's spot" price={10} quantity={9} allDay={true}/></div>
        </div>
      </div>
    );
  }
}

export default App;
