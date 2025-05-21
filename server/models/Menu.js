// models/Menu.js
const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model('Menu', MenuSchema);
