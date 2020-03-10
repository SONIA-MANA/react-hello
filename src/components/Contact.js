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
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlecommentsChange(event) {
    this.setState({
      comments: event.target.value,
    });
  }

  handleTopicChange(event) {
    this.setState({
      topic: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.username}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSumbit={this.handleSubmit}>
        <fieldset>
          <legend><h2><u>personal information:</u></h2></legend>
          <div>
            <label><h3>firstname:</h3></label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label><h3>lasttname:</h3></label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label><h3>comments:</h3></label>
            <input
              type="textarea"
              value={this.state.comments}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label><h3>Country:</h3></label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Tanzania">Tanzania</option>
            </select>
          </div>
          <button type="submit"><h3>submit</h3></button>
        </fieldset>
      </form>
    );
  }
}


export default Contact;
