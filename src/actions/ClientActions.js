import API from '../API';

const ClientActions = {
  getAllClients() {
    API.getAllClients();
  },
  createNewClient(newClient) {
    API.createNewClient(newClient);
  },
  getOneClient(id) {
    API.getOneClient(id);
  },
  removeClient(id) {
    API.removeClient(id);
  },
  updateClient(id, newInfo) {
    API.updateClient(id, newInfo);
  },
};

export default ClientActions;
