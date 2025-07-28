const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Role', roleSchema);
