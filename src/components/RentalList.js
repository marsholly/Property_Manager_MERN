import React, { Component } from 'react';
import { Card, Label, Button } from 'semantic-ui-react';
import numeral from 'numeral';
import PropertyActions from '../actions/PropertyActions';
import PropertyStore from '../stores/PropertyStore';


export default class RentalList extends Component {
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
      propertyBlock = properties.map((property) => {
        const { _id, address, propertyPic, propertyPhone, area,
         rentPrice, numberOfRooms, numberOfBathrooms, petsAllowed } = property;
        const extra = (
          <div className="text-center">
            <Button
              size="big"
              color="pink"
              content="Like"
              icon="heart"
              label={{ basic: true, color: 'red', pointing: 'left', content: 'rent it' }}
            />
          </div>
         );
        return (
          <Card
            key={_id}
            image={propertyPic}
            header={address}
            meta={`${area}SF`}
            description={
              <div>
                <Label as="a" color="orange" size="big">{numeral(rentPrice).format('$0,0.00')}</Label>
                <Label as="a" image size="large">
                  <img alt="label" src="http://media.idownloadblog.com/wp-content/uploads/2016/01/2013-08-26_09-38-25__Phone_iOS7_App_Icon_Rounded.png" />
                  {propertyPhone}
                </Label>
                <div className="labelInfo">
                  <Label as="a" image size="large">
                    {petsAllowed === true ? <img alt="label" src="https://www.vacationsmadeeasy.com/images/lodgingCats/globalCat_2/icon_en.png" /> : <img alt="label" src="http://www.ypnar.com/content/image/products/small/a21a3889-640d-4ef9-8b7c-55ce09dddb98/dogs-not-allowed.png" />}
                  </Label>
                  <Label as="a" image size="large">
                    <img alt="label" src="http://www.clker.com/cliparts/W/H/n/k/B/C/green-bed-hotel-hi.png" />
                    {numberOfRooms}
                  </Label>
                  <Label as="a" image size="large">
                    <img alt="label" src="http://previews.123rf.com/images/keltt/keltt1308/keltt130800034/21702916-blue-bathroom-icon-with-shower-room-silhouette-Stock-Vector-bathroom.jpg" />
                    {numberOfBathrooms}
                  </Label>
                </div>
              </div>
            }
            extra={extra}
          />
         );
      });
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
