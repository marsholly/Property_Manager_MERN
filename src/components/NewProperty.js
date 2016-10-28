import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import PropertyActions from '../actions/PropertyActions';

const optionsBeds = [
  { text: '1.0', value: '1.0' },
  { text: '2.0', value: '2.0' },
  { text: '3.0', value: '3.0' },
  { text: '4.0', value: '4.0' },
  { text: '5.0', value: '5.0' },
  { text: '6.0', value: '6.0' },
  { text: '7.0', value: '7.0' },
  { text: '8.0', value: '8.0' },
];
const optionsBaths = [
  { text: '1.0', value: '1.0' },
  { text: '1.5', value: '1.5' },
  { text: '2.0', value: '2.0' },
  { text: '2.5', value: '2.5' },
  { text: '3.0', value: '3.0' },
  { text: '3.5', value: '3.5' },
  { text: '4.0', value: '4.0' },
  { text: '4.5', value: '4.5' },
  { text: '5.0', value: '5.0' },
  { text: '5.5', value: '5.5' },
  { text: '6.0', value: '6.0' },
];

export default class NewProperty extends Component {
  constructor() {
    super();
    this.state = {
      value: true,
      serializedForm: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, { value }) {
    this.setState({ value });
  }

  handleSubmit(e, serializedForm) {
    e.preventDefault();
    const { address, propertyPic, propertyPhone, area, rentPrice,
      numberOfRooms, numberOfBathrooms, petsAllowed } = serializedForm;
    const newProperty = {
      address,
      propertyPic,
      propertyPhone,
      rentPrice,
      petsAllowed,
      area: Number(area),
      numberOfRooms: Number(numberOfRooms),
      numberOfBathrooms: Number(numberOfBathrooms),
    };
    PropertyActions.createNewProperty(newProperty);
    browserHistory.push({ pathname: '/' });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="container propty">
        <h3>One step. Millions of renters.</h3>
        <hr />
        <Form onSubmit={this.handleSubmit} className="proptyForm" size="massive">
          <Form.Field>
            <label htmlFor="address">Address<span className="starNotation">*</span></label>
            <input placeholder="Address" name="address" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="photo">Picture<span className="starNotation">*</span></label>
            <input placeholder="Picture" name="propertyPic" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="phone">Phone Number<span className="starNotation">*</span></label>
            <input placeholder="PhoneNumber" name="propertyPhone" />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Select
              label="Beds"
              options={optionsBeds}
              placeholder="1.0"
              name="numberOfRooms"
            />
            <Form.Select
              label="Baths"
              options={optionsBaths}
              placeholder="1.0"
              name="numberOfBathrooms"
            />
            <Form.Input label="Square Feet" placeholder="SF" name="area" />
            <Form.Input label="Rent" placeholder="$ /mo" name="rentPrice" />
          </Form.Group>
          <Form.Field>
            <label htmlFor="pets">Pets</label>
            <Form.Group inline>
              <Form.Radio label="Pets OK" name="petsAllowed" value="true" checked={value === 'true'} onChange={this.handleChange} />
              <Form.Radio label="No Pets" name="petsAllowed" value="false" checked={value === 'false'} onChange={this.handleChange} />
            </Form.Group>
          </Form.Field>
          <div className="text-center">
            <Button primary type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
}
