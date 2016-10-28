import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropertyActions from '../actions/PropertyActions';
import PropertyStore from '../stores/PropertyStore';


export default class PropertyList extends Component {
  constructor() {
    super();
    this.state = {
      properties: PropertyStore.getAllProperties(),

    };
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    PropertyActions.getAllProperties();
    PropertyStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PropertyStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ properties: PropertyStore.getAllProperties() });
  }

  render() {
    const { properties } = this.state;
    let propertyBlock;
    if (properties) {
      
    } else {
      propertyBlock = <div />;
    }
    return (
      <div className="container">
        <Card.Group itemsPerRow={4}>
          {propertyBlock}
        </Card.Group>
      </div>
    );
  }
}
