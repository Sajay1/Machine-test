const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', menuRoutes);

mongoose.connect('mongodb://localhost:27017/menuapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.listen(5000, () => console.log('Server running on port 5000'));
