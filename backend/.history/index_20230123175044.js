const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.set('strictQuery', false);

// set up server

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT} 😊`));

app.get('/test', (req, res) => {
  res.send('It work');
});

// connect to mongoDB

mongoose.connect(process.env.MDB_CONNECT, (error) => {
  if (error) return console.error(error);
  console.log('Connected to MongoDB');
});

//  set up routes

app.use('/auth', require('./routers/userRouter'));
