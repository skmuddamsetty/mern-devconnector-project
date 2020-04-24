const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to Database
connectDB();

app.get('/', (req, res) => {
  res.send('API Running');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`DevConnector Started on PORT ${PORT}`);
});
