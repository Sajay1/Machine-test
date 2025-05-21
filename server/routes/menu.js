// routes/menu.js
const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');
const MenuItem = require('../models/MenuItem');

// Get all menus
router.get('/', async (req, res) => {
  const menus = await Menu.find();
  res.json(menus);
});

// Get menu with items
router.get('/:id', async (req, res) => {
  const menu = await Menu.findById(req.params.id);
  const items = await MenuItem.find({ menuId: req.params.id });
  res.json({ menu, items });
});

// Create a new menu
router.post('/', async (req, res) => {
  const menu = new Menu(req.body);
  await menu.save();
  res.json(menu);
});

// Add item to menu
router.post('/:id/items', async (req, res) => {
  const item = new MenuItem({ ...req.body, menuId: req.params.id });
  await item.save();
  res.json(item);
});

module.exports = router;
