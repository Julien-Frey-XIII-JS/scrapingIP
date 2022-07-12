require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./app/router');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(router);

app.use((req, res) => {
  res.status(404).send('404 Route not found');
});

app.listen(port, () => {

  console.log(`Listening on port ${port}`);
})
