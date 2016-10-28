import React, { Component } from 'react';
import { Button, Card, Image, Icon, Modal } from 'semantic-ui-react';
import ClientActions from '../actions/ClientActions';
import ClientStore from '../stores/ClientStore';


export default class ClientsList extends Component {
  constructor() {
    super();
    this.state = {
      clients: ClientStore.getAllClients(),
      open: false,
      image: '',
      editFirst: '',
      editLast: '',
      editCompany: '',
      editEmail: '',
      editPhone: '',
      editId: '',
    };
    this._onChange = this._onChange.bind(this);
    this.removeClient = this.removeClient.bind(this);
    this.editClient = this.editClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount() {
    ClientActions.getAllClients();
    ClientStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ClientStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ clients: ClientStore.getAllClients() });
  }

  removeClient(id) {
    ClientActions.removeClient(id);
  }

  updateClient(id) {
    const { editFirst, editLast, editPhone, editEmail, editCompany, image } = this.state;
    const newInfo = {
      clientName: {
        first: editFirst,
        last: editLast,
      },
      picture: image,
      company: editCompany,
      email: editEmail,
      phone: editPhone,
    };
    ClientActions.updateClient(id, newInfo);
    this.close();
  }

  editClient(client) {
    this.show('blurring');
    this.setState({
      image: client.picture,
      editFirst: client.clientName.first,
      editLast: client.clientName.last,
      editCompany: client.company,
      editPhone: client.phone,
      editEmail: client.email,
      editId: client._id,
    });
  }

  show() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { clients } = this.state;
    let clientBlock;
    if (clients) {
      clientBlock = clients.map((client) => {
        const { clientName, company, email, phone, picture, _id } = client;
        return (
          <Card key={_id}>
            <Card.Content>
              <Image floated="right" size="tiny" src={picture} />
              <Card.Header>
                {clientName.first} , {clientName.last}
              </Card.Header>
              <Card.Meta>
                {phone}
              </Card.Meta>
              <Card.Description>
                {email} <br />
                <strong>{company}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green" onClick={() => this.editClient(client)}>Update</Button>
                <Button basic color="red" onClick={() => this.removeClient(_id)}>Delete</Button>
              </div>
            </Card.Content>
          </Card>
        );
      });
    } else {
      clientBlock = <div />;
    }
    return (
      <div className="container">
        <h2 className="header text-center">Clients Information</h2>
        <div className="row">
          <Card.Group itemsPerRow={4}>
            {clientBlock}
          </Card.Group>
        </div>
        <Modal size="small" open={this.state.open} onClose={this.close} className="modalSize">
          <Modal.Header>
            Update Your Information
          </Modal.Header>
          <Modal.Content className="modalContent">
            <h5>Name<span className="starNotation">*</span></h5>
            <div className="col-xs-4">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={this.state.editFirst}
                onChange={(e) => { this.setState({ editFirst: e.target.value }); }}
              />
            </div>
            <div className="col-xs-4">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={this.state.editLast}
                onChange={(e) => { this.setState({ editLast: e.target.value }); }}
              />
            </div>
            <br /><br />
            <h5>Picture</h5>
            <div className="col-xs-12">
              <input
                type="text"
                className="form-control"
                placeholder="Picture"
                value={this.state.image}
                onChange={(e) => { this.setState({ image: e.target.value }); }}
              />
            </div>
            <br /><br />
            <h5>Company</h5>
            <div className="col-xs-12">
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                value={this.state.editCompany}
                onChange={(e) => { this.setState({ editCompany: e.target.value }); }}
              />
            </div>
            <br /><br />
            <h5>Email address && Phone Number<span className="starNotation">*</span></h5>
            <div className="col-xs-6">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                value={this.state.editEmail}
                onChange={(e) => { this.setState({ editEmail: e.target.value }); }}
              />
            </div>
            <div className="col-xs-6">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={this.state.editPhone}
                onChange={(e) => { this.setState({ editPhone: e.target.value }); }}
              />
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button positive icon onClick={() => this.updateClient(this.state.editId)} >
              Yes <Icon name="checkmark" />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
