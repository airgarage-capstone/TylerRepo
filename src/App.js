import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Login from './Login';
import Card from './Card';
import axios from 'axios'

class App extends Component {
  

  state={info:[]}

  componentDidMount(){
    axios.get(`https://airgara.ge/api/spots/`)
          .then(res => {
            const info = res.data;
            this.setState({ info });
          })
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
        /*<div>
              {this.state.info.map(card => <Card 
                spotName={card.name} 
                address={card.address.address_line1} 
                city={card.address.city} 
                state={card.address.state}  
                zip={card.address.zipcode} 
                price={card.price} quantity={card.quantity} 
                allDay={card.available_24_7}
              />)}
            </div>*/
        </div>
      </div>
    );
  }
}

export default App;
