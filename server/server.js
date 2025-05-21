const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/menus', require('./routes/menu'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
