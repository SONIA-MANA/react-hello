/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-dupe-class-members */
import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props); // since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { // state is by default an object
      students: [
        {
          id: 1, name: 'SUSAN', age: 21, email: 'susan@email.com',
        },
        {
          id: 2, name: 'SHARON', age: 19, email: 'sharon@email.com',
        },
        {
          id: 3, name: 'SADIQUE', age: 16, email: 'sadique@email.com',
        },
        {
          id: 4, name: 'JUMA', age: 25, email: 'juma@email.com',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>STAFFS DETAILS</h1>
      </div>
    );
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const {
        id, name, age, email,
      } = student; // destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">STAFFS DETAILS</h1>
        <table id="students">
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }

  renderTableHeader() {
    const header = Object.keys(this.state.students[0]);
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
  }

  render() {
    return (
      <div>
        <h1 id="title"><u>STAFFS DETAILS</u></h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
