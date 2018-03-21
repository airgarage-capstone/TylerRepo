import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css'
import './Card.css'


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spotName: props.spotName,
            notes: props.notes,
            restrictions: props.restrictions,
            price: props.price,
            orgName: props.orgName,
            autoBook: props.autoBook,
            quantity: props.quantity,
            photo: props.photo,
            allDay: props.allDay
        };
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
            <div className="Card">
                <h2 id="Name">{this.props.spotName}</h2>
                <div className="Info">
                    <p>{this.props.quantity} spots available.<br />
                    ${this.props.price} per month<br />
                    24/7: {this.props.allDay.toString().toUpperCase()}
                    </p>
                </div>

            </div>
        );
    }
}
export default Card;