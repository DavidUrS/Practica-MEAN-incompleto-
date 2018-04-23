const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new Schema({
  name : String,
  lastName : String,
  age : Number,
  weight : Number
})

var usersModel = mongoose.model('Users', usersSchema);

module.exports = usersModel;
