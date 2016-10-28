import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';


let _properties = [];

class PropertyStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register((action) => {
      switch (action.type) {
        case 'RECEIVE_ALL_PROPERTIES':
          _properties = action.payload.properties;
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

  getAllProperties(){   //eslint-disable-line
    return _properties;
  }
}

export default new PropertyStore();
