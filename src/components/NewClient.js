import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ClientActions from '../actions/ClientActions';

export default class NewClient extends Component {
  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(e) {
    e.preventDefault();
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const picture = this.picture.value;
    const company = this.company.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const newClient = {
      clientName: {
        first: firstName,
        last: lastName,
      },
      picture,
      company,
      email,
      phone,
    };
    ClientActions.createNewClient(newClient);
    browserHistory.push({ pathname: '/' });
  }

  render() {
    return (
      <div className="container register">
        <h3>Client Registration</h3>
        <hr />
        <form onSubmit={this._onSubmit}>
          <h5>Name<span className="starNotation">*</span></h5>
          <div className="col-xs-4">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              ref={(firstName) => { this.firstName = firstName; }}
            />
          </div>
          <div className="col-xs-4">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              ref={(lastName) => { this.lastName = lastName; }}
            />
          </div>
          <br /><br />
          <h5>Picture</h5>
          <div className="col-xs-12">
            <input
              type="text"
              className="form-control"
              placeholder="Picture"
              ref={(picture) => { this.picture = picture; }}
            />
          </div>
          <br /><br />
          <h5>Company</h5>
          <div className="col-xs-12">
            <input
              type="text"
              className="form-control"
              placeholder="Company"
              ref={(company) => { this.company = company; }}
            />
          </div>
          <br /><br />
          <h5>Email address<span className="starNotation">*</span>
            Phone Number<span className="starNotation">*</span></h5>
          <div className="col-xs-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              ref={(email) => { this.email = email; }}
            />
          </div>
          <div className="col-xs-6">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              ref={(phone) => { this.phone = phone; }}
            />
          </div>
          <br /><br /><br />
          <div className="text-center">
            <button type="Submit" className="btn btn-info">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
