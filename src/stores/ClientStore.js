import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';


let _clients = [];

class ClientStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register((action) => {
      switch (action.type) {
        case 'RECEIVE_ALL_CLIENTS':
          _clients = action.payload.clients;
          this.emit('CHANGE');
          break;
        default: break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllClients(){   //eslint-disable-line
    return _clients;
  }
}

export default new ClientStore();
