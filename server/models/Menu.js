const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
});

module.exports = mongoose.model('Menu', MenuSchema);
