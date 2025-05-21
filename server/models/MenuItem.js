// models/MenuItem.js
const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
