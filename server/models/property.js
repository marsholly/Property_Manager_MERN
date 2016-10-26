const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  address: { type: String, require: true },
  propertyPhone: { type: String, require: true },
  rentPrice: { type: String, require: true },
  propertyPic: { type: String },
  numberOfRooms: { type: Number },
  numberOfBathrooms: { type: Number },
  area: { type: Number },
  petsAllowed: { type: Boolean, default: true },
  customers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }],
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
