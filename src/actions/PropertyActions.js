import API from '../API';

const PropertyActions = {
  getAllProperties() {
    API.getAllProperties();
  },
  createNewProperty(newProperty) {
    API.createNewProperty(newProperty);
  },
  getOneProperty(id) {
    API.getOneProperty(id);
  },
  removeProperty(id) {
    API.removeProperty(id);
  },
  updateProperty(id, newInfo) {
    API.updateProperty(id, newInfo);
  },
};

export default PropertyActions;
