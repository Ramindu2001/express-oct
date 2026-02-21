const express = require('express')
const app = express()
require('dotenv').config(); // Load the .env variables
// Use the PORT from .env, or default to 3000 if it's missing
const port = process.env.PORT || 3000

app.use(express.json());

const studentRoutes = require('./routes/studentRoutes');

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
