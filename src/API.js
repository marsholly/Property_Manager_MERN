import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getAllClients() {
    axios.get('/api/clients/')
      .then(res => res.data)
      .then(ServerActions.receiveAllClients)
      .catch(console.error);
  },
  createNewClient(newClient) {
    axios.post('/api/clients/', newClient)
      .then(res => res.data)
      .then(this.getAllClients())
      .catch(console.error);
  },
  getOneClient(id) {
    axios.get(`/api/clients/${id}`)
      .then(res => res.data)
      .then(ServerActions.receiveOneClient)
      .catch(console.error);
  },
  removeClient(id) {
    axios.delete(`/api/clients/${id}`)
      .then(res => res.data)
      .then(this.getAllClients())
      .catch(console.error);
  },
  updateClient(id, newInfo) {
    axios.put(`/api/clients/${id}`, newInfo)
      .then(res => res.data)
      .then(this.getAllClients())
      .catch(console.error);
  },
};

export default API;
