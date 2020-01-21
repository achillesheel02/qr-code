const mongoose = require('mongoose');

const GuestSchema = mongoose.Schema({
  fullname: {type: String, required:true},
  gender: {type: String, required:true},
  idnumber: {type: Number, required:true},
  phoneno: {type: String, required:true},
  email: {type: String, required:true},
  barcode: {type: String, required:true}
});

module.exports = mongoose.model('Guest', GuestSchema);
