const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
  name: { type: String, required: true },
  description: String,
  price: Number
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
