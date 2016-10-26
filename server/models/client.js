const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientName: {
    first: { type: String, minlength: 1, require: true },
    last: { type: String, require: true },
  },
  picture: { type: String },
  company: { type: String },
  email: { type: String, require: true },
  phone: { type: String, require: true },
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
