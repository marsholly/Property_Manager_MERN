import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveAllClients(clients) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_CLIENTS',
      payload: { clients },
    });
  },
  receiveOneClient(client) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_CLIENT',
      payload: { client },
    });
  },
  receiveAllProperties(properties) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_PROPERTIES',
      payload: { properties },
    });
  },
  receiveOneProperty(property) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_PROPERTY',
      payload: { property },
    });
  },
};

export default ServerActions;
