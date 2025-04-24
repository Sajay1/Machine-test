const express = require('express');
const Menu = require('../models/Menu');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

router.post('/menus', async (req, res) => {
  const menu = new Menu(req.body);
  await menu.save();
  res.json(menu);
});

router.get('/menus', async (req, res) => {
  const menus = await Menu.find();
  res.json(menus);
});

router.post('/menus/:id/items', async (req, res) => {
  const item = new MenuItem({ ...req.body, menuId: req.params.id });
  await item.save();
  res.json(item);
});

router.get('/menus/:id/items', async (req, res) => {
  const items = await MenuItem.find({ menuId: req.params.id });
  res.json(items);
});


module.exports = router;
