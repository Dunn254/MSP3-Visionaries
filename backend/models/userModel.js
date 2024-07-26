const mongoose = require('mongoose');
const moment = require('moment-timezone');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    default: () => moment.tz(Date.now(), 'America/Los_Angeles').toDate(),
  },
});

module.exports = mongoose.model('User', userSchema);
