/* eslint-disable react/no-unused-state */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lasttname: '',
      comments: '',
      Country: 'Kenya',
    };

    this.handlefirstnameChange = this.handlefirstnameChange.bind(this);
    this.handlelastnameChange = this.handlelastnameChange.bind(this);
    this.handlecommentsChange = this.handlecommentsChange.bind(this);
    this.handlecountryChange = this.handlecountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlefirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  }

  handlelastnameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  }

  handlecommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  }

  handlecountryChange = (event) => {
    this.setState({
      Country: event.target.value,
    });
  }

  handleSubmit = (event) => {
    alert("Details submitted: ");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend><h2><u>personal information:</u></h2></legend>
          <div>
            <label><h3>firstname:</h3></label>
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handlefirstnameChange}
            />
          </div>
          <div>
            <label><h3>lastname:</h3></label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handlelastnameChange}
            />
          </div>
          <div>
            <label><h3>comments:</h3></label>
            <textarea
              value={this.state.comments}
              onChange={this.handlecommentsChange}
            />
          </div>
          <div>
            <label><h3>Country:</h3></label>
            <select value={this.state.Country} onChange={this.handlecountryChange}>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Tanzania">Tanzania</option>
            </select>
          </div>
          <button type="Submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}


export default Contact;
